-- AlterTable
ALTER TABLE "public"."Report" ADD COLUMN     "ngoId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_ngoId_fkey" FOREIGN KEY ("ngoId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
