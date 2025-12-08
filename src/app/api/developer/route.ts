import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Developer } from "@/models/Developer.model";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const newEntry = await Developer.create(body);

    return NextResponse.json({ message: "Saved successfully", data: newEntry });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save Developer" }, { status: 500 });
  }
}
