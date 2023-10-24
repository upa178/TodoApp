import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Args = {
  id: number;
};

export const deleteTodo = async (args: Args) => {
  const { id } = args;
  const todos = await prisma.todos.delete({
    where: {
      id: id,
    },
  });
  return todos;
};
