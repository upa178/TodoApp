/*
  Warnings:

  - Made the column `description` on table `todos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `todos` MODIFY `description` VARCHAR(191) NOT NULL;
