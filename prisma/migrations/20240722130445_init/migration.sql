-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "year" TEXT,
    "author" TEXT,
    "summary" TEXT,
    "publiser" TEXT,
    "pageCount" TEXT NOT NULL,
    "readPage" TEXT NOT NULL,
    "reading" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
