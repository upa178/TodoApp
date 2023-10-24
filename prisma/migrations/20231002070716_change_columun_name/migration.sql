/*
  Warnings:

  - The primary key for the `todos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `formDescription` on the `todos` table. All the data in the column will be lost.
  - You are about to drop the column `todo_id` on the `todos` table. All the data in the column will be lost.
  - Added the required column `description` to the `todos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todos` DROP PRIMARY KEY,
    DROP COLUMN `formDescription`,
    DROP COLUMN `todo_id`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `task_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`task_id`);
