import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo Firebase",
      CoursesModules: {
        create: {
          courses: {
            connect: {
              id: "0075121c-f1f5-4f1b-b1bb-239b4c0660cd",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
