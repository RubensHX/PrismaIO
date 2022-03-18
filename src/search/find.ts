import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const results = await prisma.courses.findMany({
        where: {
            name: "Curso de Java"
        },
    })
    console.log(results)
}

main()