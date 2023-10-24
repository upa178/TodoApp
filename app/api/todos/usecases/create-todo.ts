import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Args = {
  title: string;
  description: string;
};

export const createTodo = async (args: Args) => {
  const { title, description } = args;
  const todos = await prisma.todos.create({
    data: {
      title,
      description,
      isCompleted: false,
    },
  });
  console.log(todos);
  return todos;
};
