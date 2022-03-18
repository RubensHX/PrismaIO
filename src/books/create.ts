import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "50 Years in the Making",
      fk_id_author: "a1095443-eeb2-40d5-85e9-8b10bd6a7a15",
    },
  });
  console.log(result);
}

main();
