import {
  CompletionChunk,
  OllamaStream,
  ollamaStream,
} from "@/app/ollama-stream";
import { StreamingTextResponse, Message, streamToResponse } from "ai";
import { NextResponse } from "next/server";
import { Ollama } from "ollama-node";
import { PassThrough, Readable } from "stream";

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// export const runtime = "edge";
let context: Record<string, number[]> = {};

export async function POST(req: Request, res: Response) {
  const { messages, id } = (await req.json()) as {
    messages: Message[];
    id: string;
  };
  console.log("id: ", id);

  const ollama = new Ollama();
  await ollama.setModel("mistral");

  if (context[id]) ollama.setContext(context[id]);

  const response = ollamaStream(async (addChunk, close) => {
    await ollama.streamingGenerate(
      messages[messages.length - 1].content,
      null,
      null,
      (d) => {
        const data = JSON.parse(d);

        if (data.done) {
          context[id] = data.context;

          return close();
        }

        return addChunk(data.response);
      }
    );
  });

  return new StreamingTextResponse(response);
}
