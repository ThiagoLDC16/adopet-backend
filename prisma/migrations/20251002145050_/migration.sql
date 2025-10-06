/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Characteristic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Characteristic_description_key" ON "public"."Characteristic"("description");