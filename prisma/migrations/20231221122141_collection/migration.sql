/*
  Warnings:

  - You are about to drop the column `position` on the `Collection` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frontText" TEXT NOT NULL,
    "backText" TEXT NOT NULL,
    "lastReviewed" DATETIME
);
INSERT INTO "new_Collection" ("backText", "createdAt", "frontText", "id", "lastReviewed") SELECT "backText", "createdAt", "frontText", "id", "lastReviewed" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
