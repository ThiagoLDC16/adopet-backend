import { prisma } from "../src/config/prisma";

async function rawSql() {
  const result = await prisma.$executeRaw`INSERT INTO "Characteristic" (description) VALUES ('Carinhoso')`
  console.log({ result })
}

async function main() {}

main()
    .then(rawSql)
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })