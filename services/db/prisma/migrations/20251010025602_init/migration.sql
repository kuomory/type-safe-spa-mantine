/*
  Warnings:

  - You are about to drop the column `code` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `Item` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[key]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - The required column `key` was added to the `Category` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `key` was added to the `Item` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "public"."Category_code_key";

-- DropIndex
DROP INDEX "public"."Item_code_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "code",
ADD COLUMN     "key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "code",
ADD COLUMN     "key" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_key_key" ON "Category"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Item_key_key" ON "Item"("key");
