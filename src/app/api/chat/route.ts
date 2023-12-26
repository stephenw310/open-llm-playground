import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages, modelName, temperature, maxLength, apiKey } =
      await req.json();

    const openai = new OpenAI({
      apiKey,
    });

    // console.log(messages, modelName, temperature, maxLength, apiKey);
    const response = await openai.chat.completions
      .create({
        model: modelName,
        temperature: temperature,
        max_tokens: maxLength,
        stream: true,
        messages: messages,
      })
      .asResponse();

    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    let message = "";

    if (error instanceof Error) {
      message = error.message;
    } else {
      message = error as string;
    }

    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
