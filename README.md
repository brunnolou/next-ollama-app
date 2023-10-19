# Vercel AI SDK, Next.js, LangChain, Ollama Chat Example

This example shows how to use the [Vercel AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/), [LangChain](https://js.langchain.com), and [Ollama](https://ollama.ai) to create a ChatGPT-like AI-powered streaming chat bot.

## Deploy your own

> NOTE: Ollama needs to be deployed separately.

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-langchain&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=ai-chat-langchain&repository-name=next-ai-chat-langchain)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/brunnolou/next-ollama-app
```

```bash
yarn create next-app --example https://github.com/brunnolou/next-ollama-app
```

```bash
pnpm create next-app --example https://github.com/brunnolou/next-ollama-app
```

To run the example locally you need to:

1. [Download Ollama](https://ollama.ai/download) and install it locally.
2. run `ollama run mistral` to download and install the model locally (Requires 4.1GB and 8GB of RAM)
3. Open http://localhost:11434 to check if _Ollama is running_.
4. `yarn install` to install the required dependencies.
5. `yarn dev` to launch the development server.


## Learn More

To learn more about LangChain, OpenAI, Next.js, and the Vercel AI SDK take a look at the following resources:

- [Vercel AI SDK docs](https://sdk.vercel.ai/docs) - learn mode about the Vercel AI SDK
- [Vercel AI Playground](https://play.vercel.ai) - compare and tune 20+ AI models side-by-side
- [LangChain Documentation](https://js.langchain.com/docs) - learn about LangChain
- [Ollama](https://ollama.ai) - learn about Ollama features, models, and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
