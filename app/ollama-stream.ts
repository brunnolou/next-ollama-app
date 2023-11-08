import {
  AIStream,
  readableFromAsyncIterable,
  type AIStreamCallbacksAndOptions,
  createCallbacksTransformer,
  AIStreamParser,
} from "ai";

export interface CompletionChunk {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

function parseOllamaStream(): AIStreamParser {
  return (data) => {
    const json = JSON.parse(data) as CompletionChunk;

    return json.response;
  };
}

export function OllamaStream(
  res: Response,
  cb?: AIStreamCallbacksAndOptions
): ReadableStream {
  return AIStream(res, parseOllamaStream(), cb);
}

export function ollamaStream(
  cb: (addChunk: (chunk: string) => void, close: () => void) => void
) {
  let readableController: ReadableStreamDefaultController;

  const readable = new ReadableStream({
    start(controller) {
      readableController = controller;
    },
  });

  // Utility function to add chunks
  const addChunk = (text: string) => {
    const uint8Array = new TextEncoder().encode(text);

    readableController.enqueue(uint8Array);
  };

  cb(addChunk, () => readableController.close());

  return readable;
}
