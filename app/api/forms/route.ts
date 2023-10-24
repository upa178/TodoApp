import { NextRequest, NextResponse } from "next/server";
import { getAllForms } from "./usecases/get-all-forms";
import { createForm } from "./usecases/create-forms";

export async function GET() {
  const forms = await getAllForms();
  return NextResponse.json(forms);
}

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const { title, formDescription } = requestBody;
  const forms = await createForm({ title, formDescription });
  return NextResponse.json(forms);
}
