-- CreateEnum
CREATE TYPE "public"."ReportStatus" AS ENUM ('PENDING', 'VALIDATED', 'REJECTED', 'IN_PROGRESS', 'RESOLVED');

-- DropForeignKey
ALTER TABLE "public"."Midia" DROP CONSTRAINT "Midia_animalId_fkey";

-- AlterTable
ALTER TABLE "public"."Midia" ADD COLUMN     "reportId" INTEGER,
ALTER COLUMN "animalId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."Report" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" "public"."ReportStatus" NOT NULL,
    "userId" INTEGER,
    "ocurrenceDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Midia" ADD CONSTRAINT "Midia_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "public"."Animal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Midia" ADD CONSTRAINT "Midia_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "public"."Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
