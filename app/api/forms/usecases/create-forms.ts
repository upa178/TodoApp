import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Args = {
  title: string;
  formDescription: string;
};

export const createForm = async (args: Args) => {
  const { title, formDescription } = args;
  const todos = await prisma.forms.create({
    data: {
      title,
      formDescription,
    },
  });
  return todos;
};
