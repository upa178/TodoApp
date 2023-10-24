/*
  Warnings:

  - The primary key for the `forms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `forms` table. All the data in the column will be lost.
  - Added the required column `form_id` to the `forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `forms` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `form_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`form_id`);

-- CreateTable
CREATE TABLE `todos` (
    `todo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `formDescription` VARCHAR(191) NOT NULL,
    `isCompleted` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`todo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
