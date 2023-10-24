import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllForms = async () => {
  const forms = await prisma.forms.findMany();
  return forms;
};
