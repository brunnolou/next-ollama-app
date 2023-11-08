"use client";

import { useChat } from "ai/react";
import { useState } from "react";

export default function Chat() {
  const [id] = useState(() => Math.random().toString(36).slice(-6));

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: { id },
  });

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap mb-4">
              <b>{m.role === "user" ? "User: " : "AI: "}</b>
              {m.content}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit} className="flex">
        <textarea
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
