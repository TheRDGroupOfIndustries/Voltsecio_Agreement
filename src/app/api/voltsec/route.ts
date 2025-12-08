// import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "@/lib/mongodb";
// import { VoltSec } from "@/models/VoltSec.model";

// export async function POST(req: NextRequest) {
//   try {
//     await dbConnect();
//     const body = await req.json();

//     const newEntry = await VoltSec.create(body);

//     return NextResponse.json({ message: "Saved successfully", data: newEntry });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to save VoltSec" }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { VoltSec } from "@/models/VoltSec.model";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    // --- CHECK IF ONE ENTRY ALREADY EXISTS ---
    const alreadyExists = await VoltSec.findOne();

    if (alreadyExists) {
      return NextResponse.json(
        { message: "VoltSec data already saved", data: alreadyExists },
        { status: 200 }
      );
    }

    // --- SAVE ONLY ONE ENTRY ---
    const newEntry = await VoltSec.create(body);

    return NextResponse.json({ message: "Saved successfully", data: newEntry });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save VoltSec" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // --- FETCH THE ONLY RECORD ---
    const data = await VoltSec.findOne();

    if (!data) {
      return NextResponse.json(
        { message: "No VoltSec data found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "VoltSec data fetched successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET VoltSec error:", error);
    return NextResponse.json(
      { error: "Failed to fetch VoltSec" },
      { status: 500 }
    );
  }
}
