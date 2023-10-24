import { NextRequest, NextResponse } from "next/server";
import { getAllTodos } from "./usecases/get-all-todos";
import { createTodo } from "./usecases/create-todo";
import { deleteTodo } from "./usecases/delete-todo";
import { updateTodo } from "./usecases/update-todo";

//TODO: バリデーションもできれば（zod）
export async function GET() {
  const todos = await getAllTodos();
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const { title, description } = requestBody;
  const todos = await createTodo({ title, description });
  return NextResponse.json(todos);
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  const todos = await deleteTodo({ id });
  return NextResponse.json(todos);
}

export async function PUT(request: NextRequest) {
  const requestBody = await request.json();
  const { id, title, description, isCompleted } = requestBody;
  const todos = await updateTodo({ id, title, description, isCompleted });
  return NextResponse.json(todos);
}
// getAllTodos()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
