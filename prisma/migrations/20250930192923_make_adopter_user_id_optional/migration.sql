-- DropForeignKey
ALTER TABLE "public"."Animal" DROP CONSTRAINT "Animal_adopterUserId_fkey";

-- AlterTable
ALTER TABLE "public"."Animal" ALTER COLUMN "adopterUserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Animal" ADD CONSTRAINT "Animal_adopterUserId_fkey" FOREIGN KEY ("adopterUserId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
