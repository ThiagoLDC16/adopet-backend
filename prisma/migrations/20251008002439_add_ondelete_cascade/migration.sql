-- DropForeignKey
ALTER TABLE "public"."Midia" DROP CONSTRAINT "Midia_animalId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Midia" DROP CONSTRAINT "Midia_reportId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Midia" ADD CONSTRAINT "Midia_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "public"."Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Midia" ADD CONSTRAINT "Midia_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "public"."Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;
