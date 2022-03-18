import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Morgan Housel",
      Books: {
        create: {
          name: "A psicologia financeira",
        },
      },
    },
  });
    console.log(result);
}

main()