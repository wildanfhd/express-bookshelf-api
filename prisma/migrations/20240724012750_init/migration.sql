-- AlterTable
ALTER TABLE "book" ADD COLUMN     "insertedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "finished" DROP NOT NULL;
