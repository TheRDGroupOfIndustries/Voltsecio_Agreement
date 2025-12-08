import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const uploadDir = path.join(process.cwd(), "public/uploads");
const dbPath = path.join(uploadDir, "signatures.json");

// Ensure upload folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Helper to read/write JSON database
const readDB = () => (fs.existsSync(dbPath) ? JSON.parse(fs.readFileSync(dbPath, "utf-8")) : {});
const writeDB = (data: any) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// ----------- POST (Upload Signature Image) -----------
export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file") as File; // ✅ File, not Blob
  const roleKey = formData.get("roleKey") as string;
  const companyKey = formData.get("companyKey") as string;

  if (!file || !roleKey || !companyKey) {
    return NextResponse.json({ error: "Missing file or role information" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);
  fs.writeFileSync(filePath, buffer);

  const db = readDB();

  // Create structure if not present
  if (!db[companyKey]) db[companyKey] = {};
  if (!db[companyKey][roleKey]) db[companyKey][roleKey] = { name: "", date: "", signature: "" };

  db[companyKey][roleKey].signature = `/uploads/${fileName}`;
  writeDB(db);

  return NextResponse.json({ url: `/uploads/${fileName}` });
};

// ----------- GET (Fetch All Data) -----------
export const GET = async () => {
  const db = readDB();
  return NextResponse.json({ signatures: db });
};

// ----------- PUT (Save Name/Date) -----------
export const PUT = async (req: NextRequest) => {
  const { companyKey, roleKey, name, date } = await req.json();
  const db = readDB();

  if (!db[companyKey]) db[companyKey] = {};
  if (!db[companyKey][roleKey]) db[companyKey][roleKey] = { name: "", date: "", signature: "" };

  if (name !== undefined) db[companyKey][roleKey].name = name;
  if (date !== undefined) db[companyKey][roleKey].date = date;

  writeDB(db);
  return NextResponse.json({ success: true });
};

// ----------- DELETE (Remove Signature Image) -----------
export const DELETE = async (req: NextRequest) => {
  const { companyKey, roleKey } = await req.json();
  if (!companyKey || !roleKey)
    return NextResponse.json({ error: "Missing data" }, { status: 400 });

  const db = readDB();
  const filePath = path.join(process.cwd(), "public", db[companyKey]?.[roleKey]?.signature || "");

  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  if (!db[companyKey]) db[companyKey] = {};
  if (!db[companyKey][roleKey]) db[companyKey][roleKey] = { name: "", date: "", signature: "" };

  db[companyKey][roleKey].signature = "";
  writeDB(db);

  return NextResponse.json({ success: true });
};
