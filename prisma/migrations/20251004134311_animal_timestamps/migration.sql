/*
  Warnings:

  - Added the required column `updatedAt` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."AnimalSpecies" AS ENUM ('DOG', 'CAT', 'BIRD', 'RODENT', 'OTHER');

-- AlterTable
ALTER TABLE "public"."Animal" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
