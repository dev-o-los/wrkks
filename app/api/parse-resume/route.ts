export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let SmartPDFParser: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let parserInstance: any;

async function getParser() {
  if (!parserInstance) {
    const mod = await import("pdf-parse-new");
    // Accessing the SmartPDFParser from the library
    SmartPDFParser = mod.SmartPDFParser;
    parserInstance = new SmartPDFParser({
      // 2. Reduce oversaturation: 1.0 or 1.5 is plenty. 2.0 blocks too many resources.
      oversaturationFactor: 1.5,
      enableFastPath: true,
      // 3. Force "batch" method for Serverless/Next.js.
      // "workers" or "processes" can crash restricted environments like Vercel.
      forceMethod: "batch",
    });
  }
  return parserInstance;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file || file.type !== "application/pdf") {
      return NextResponse.json(
        { msg: "Please upload a valid PDF file" },
        { status: 400 },
      );
    }

    // 4. Set a size limit (e.g., 5MB) to prevent the Node process from hanging/crashing
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { msg: "File too large for instant parsing (Max 5MB)" },
        { status: 413 },
      );
    }

    const parser = await getParser();
    const buffer = Buffer.from(await file.arrayBuffer());

    // 5. Execute parsing
    const data = await parser.parse(buffer);

    return NextResponse.json(data);
  } catch (error) {
    console.error("PDF Parsing Error:", error);
    return NextResponse.json(
      { msg: "Failed to parse PDF", details: (error as Error).message },
      { status: 500 },
    );
  }
}
