/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[authorId,postId]` on the table `Like`. If there are existing duplicate values, the migration will fail.
  - Made the column `postId` on table `Comment` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `postId` on table `Like` required. The migration will fail if there are existing NULL values in that column.
  - Added the required column `bio` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "postId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "postId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Like.authorId_postId_unique" ON "Like"("authorId", "postId");
