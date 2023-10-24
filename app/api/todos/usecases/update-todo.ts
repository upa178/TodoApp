import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Args = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export const updateTodo = async (args: Args) => {
  const { id, title, description, isCompleted } = args;
  const todos = await prisma.todos.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      description: description,
      isCompleted: isCompleted,
    },
  });
  console.log(todos);
  return todos;
};
