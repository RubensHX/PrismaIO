import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Main() {
  const result = await prisma.courses.delete({
    where: {
      id: "0075121c-f1f5-4f1b-b1bb-239b4c0660cd",
    },
  });
  console.log(result);
}

Main();
