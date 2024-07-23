/*
  Warnings:

  - You are about to drop the column `publiser` on the `book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "publiser",
ADD COLUMN     "publisher" TEXT;
