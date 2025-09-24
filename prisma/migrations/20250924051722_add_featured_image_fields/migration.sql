-- AlterTable
ALTER TABLE `post` ADD COLUMN `featuredImageIndex` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `postimage` ADD COLUMN `isFeatured` BOOLEAN NOT NULL DEFAULT false;
