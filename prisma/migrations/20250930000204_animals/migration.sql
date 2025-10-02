-- CreateTable
CREATE TABLE "public"."Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "responsibleNGOId" INTEGER NOT NULL,
    "adopterUserId" INTEGER NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AnimalsCharacteristics" (
    "animalId" INTEGER NOT NULL,
    "characteristicId" INTEGER NOT NULL,

    CONSTRAINT "AnimalsCharacteristics_pkey" PRIMARY KEY ("animalId","characteristicId")
);

-- CreateTable
CREATE TABLE "public"."Characteristic" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Midia" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "Midia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Animal" ADD CONSTRAINT "Animal_responsibleNGOId_fkey" FOREIGN KEY ("responsibleNGOId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Animal" ADD CONSTRAINT "Animal_adopterUserId_fkey" FOREIGN KEY ("adopterUserId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnimalsCharacteristics" ADD CONSTRAINT "AnimalsCharacteristics_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "public"."Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnimalsCharacteristics" ADD CONSTRAINT "AnimalsCharacteristics_characteristicId_fkey" FOREIGN KEY ("characteristicId") REFERENCES "public"."Characteristic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Midia" ADD CONSTRAINT "Midia_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "public"."Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
