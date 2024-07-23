/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Book";

-- CreateTable
CREATE TABLE "book" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "year" TEXT,
    "author" TEXT,
    "summary" TEXT,
    "publiser" TEXT,
    "pageCount" TEXT NOT NULL,
    "readPage" TEXT NOT NULL,
    "reading" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);
