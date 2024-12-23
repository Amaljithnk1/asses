/*
  Warnings:

  - Changed the type of `name` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CourseName" AS ENUM ('CBSE_9_SCIENCE', 'CBSE_9_MATH');

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "name",
ADD COLUMN     "name" "CourseName" NOT NULL;
