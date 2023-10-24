/*
  Warnings:

  - The primary key for the `forms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `form_id` on the `forms` table. All the data in the column will be lost.
  - The primary key for the `todos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `task_id` on the `todos` table. All the data in the column will be lost.
  - Added the required column `id` to the `forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `forms` DROP PRIMARY KEY,
    DROP COLUMN `form_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `todos` DROP PRIMARY KEY,
    DROP COLUMN `task_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
