import { NextRequest, NextResponse } from "next/server";
import OpenAI, { APIError } from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const prompt = `
Convert the following resume text into valid structured JSON.

Return ONLY JSON (no markdown, no explanation).

Schema:
{
  "personalInfo": {
    "name": "string",
    "title": "string",
    "location": "string",
    "phone": "string",
    "email": "string",
    "website": "string",
    "linkedin": "string",
    "github": "string",
  },
  "summary": "string",
  "skills": {
    "languages": ["string"],
    "frameworksAndTools": ["string"],
    "libraries": ["string"],
    "softSkills": ["string"]
  },
  "experience": [
    {
      "company": "string",
      "position": "string",
      "location": "string",
      "startDate": "string",
      "endDate": "string",
      "isCurrentRole": "boolean",
      "description": ["string"],
      "technologies": ["string"]
    }
  ],
  "projects": [
    {
      "name": "string",
      "role": "string",
      "startDate": "string",
      "endDate": "string",
      "link": "string | null",
      "description": ["string"],
      "technologies": ["string"]
    }
  ],
  "education": [
    {
      "university": "string",
      "degree": "string",
      "branch": "string",
      "location": "string",
      "sgpa": "string",
      "startDate": "string",
      "endDate": "string"
    }
  ],
  "extracurricular": ["string"],
  "customSections": [
    {
      "title": "string",
      "items": ["string"]
    }
  ]
}

Resume Text:
${text}
`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENROUTER_MODEL_NAME!,
      messages: [
        {
          role: "system",
          content: "You are a resume parser that outputs only valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
      response_format: { type: "json_object" },
    });

    const raw = completion.choices[0].message.content;

    if (!raw) {
      return NextResponse.json(
        { msg: "Failed to parse resume details" },
        { status: 500 },
      );
    }
    const parsedJSON = JSON.parse(raw);

    return NextResponse.json(parsedJSON);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "Failed to parse PDF", details: (error as APIError).message },
      { status: 500 },
    );
  }
}
