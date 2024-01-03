/*
  Warnings:

  - You are about to drop the column `lastReviewed` on the `Collection` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frontText" TEXT NOT NULL,
    "backText" TEXT NOT NULL,
    "interval" DECIMAL NOT NULL DEFAULT 0.1,
    "n" INTEGER NOT NULL DEFAULT 0,
    "efactor" DECIMAL NOT NULL DEFAULT 2.5
);
INSERT INTO "new_Collection" ("backText", "createdAt", "frontText", "id") SELECT "backText", "createdAt", "frontText", "id" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
