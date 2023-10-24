import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {

  const todos = await prisma.todos.findMany()

  // const todos = await prisma.todos.create({
  //   data: {
  //     title: "送信テストtitle",
  //     description: "内容1",
  //     isCompleted: false,
  //   },
  // });
  console.log(todos);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
