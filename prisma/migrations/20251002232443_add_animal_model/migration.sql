-- CreateEnum
CREATE TYPE "AnimalStatus" AS ENUM ('DISPONIVEL', 'ADOTADO', 'EM_PROCESSO');

-- CreateEnum
CREATE TYPE "AnimalSpecies" AS ENUM ('CACHORRO', 'GATO', 'PASSARO', 'ROEDOR', 'OUTRO');

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" "AnimalSpecies" NOT NULL,
    "breed" TEXT,
    "age" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" "AnimalStatus" NOT NULL DEFAULT 'DISPONIVEL',
    "images" TEXT[],
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "ongId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
