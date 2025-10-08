-- DropForeignKey
ALTER TABLE "public"."AnimalsCharacteristics" DROP CONSTRAINT "AnimalsCharacteristics_animalId_fkey";

-- DropForeignKey
ALTER TABLE "public"."AnimalsCharacteristics" DROP CONSTRAINT "AnimalsCharacteristics_characteristicId_fkey";

-- AddForeignKey
ALTER TABLE "public"."AnimalsCharacteristics" ADD CONSTRAINT "AnimalsCharacteristics_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "public"."Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnimalsCharacteristics" ADD CONSTRAINT "AnimalsCharacteristics_characteristicId_fkey" FOREIGN KEY ("characteristicId") REFERENCES "public"."Characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
