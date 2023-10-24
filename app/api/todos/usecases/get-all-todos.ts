import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  const todos = await prisma.todos.findMany();
  return todos;
};
