# RAG – Vercel AI SDK, Next.js, LangChain, Ollama Chat Example

This example shows how to use the [Vercel AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/), [LangChain](https://js.langchain.com), and [Ollama](https://ollama.ai) to create a ChatGPT-like AI-powered streaming chat bot.

## Deploy your own

> NOTE: Ollama needs to be deployed separately.

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-langchain&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=ai-chat-langchain&repository-name=next-ai-chat-langchain)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/brunnolou/next-langchain-rag-ollama
```

```bash
yarn create next-app --example https://github.com/brunnolou/next-langchain-rag-ollama
```

```bash
pnpm create next-app --example https://github.com/brunnolou/next-langchain-rag-ollama
```

To run the example locally you need to:

Run Ollama
1. [Download Ollama](https://ollama.ai/download) and install it locally.
2. run `ollama run mistral` to download and install the model locally (Requires 4.1GB and 8GB of RAM)
3. Open http://localhost:11434 to check if _Ollama is running_.

Setup the Vector database
4. Run the Qdrant database locally (`docker pull qdrant/qdrant` & `docker run -p 6333:6333 qdrant/qdrant`)
5. Open the dashboard (`http://localhost:6333/dashboard`)
6. Open up the console.
7. Create a new collection
```
PUT collections/swiss-or 
{
  "vectors": {
    "size": 384,
    "distance": "Cosine"
  }
}
```
8. Download the (snapshot file)[https://huggingface.co/datasets/brunnolou/swiss-code-of-obligations/resolve/main/swiss-code-of-obligations-articles-gte-small-2023-10-18-12-13-25_qdrant-v1-6-1.snapshot.zip]
9. Unzip the file using the terminal (not Finder on Mac) with `unzip ...`
10. Upload the file using the following command. Adapt the fields accordingly and run it from the same directory, as where you snapshot lies.
```
curl -X POST 'http://localhost:6333/collections/swiss-or/snapshots/upload' \
    -H 'Content-Type:multipart/form-data' \
    -F 'snapshot=@swiss-code-of-obligations-articles-gte-small-2023-10-18-12-13-25.snapshot'
```
11. `yarn install` to install the required dependencies.
12. Copy the file `.env.local.example` in the project and rename it to `.env`. Verify if all environment variables are correct. 
12. `yarn dev` to launch the development server.
13. Go to `http://localhost:3000` and try out the app.


## Learn More

To learn more about LangChain, OpenAI, Next.js, and the Vercel AI SDK take a look at the following resources:

- [Vercel AI SDK docs](https://sdk.vercel.ai/docs) - learn mode about the Vercel AI SDK
- [Vercel AI Playground](https://play.vercel.ai) - compare and tune 20+ AI models side-by-side
- [LangChain Documentation](https://js.langchain.com/docs) - learn about LangChain
- [Ollama](https://ollama.ai) - learn about Ollama features, models, and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
