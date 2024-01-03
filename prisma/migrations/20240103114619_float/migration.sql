/*
  Warnings:

  - You are about to alter the column `efactor` on the `Collection` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `interval` on the `Collection` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frontText" TEXT NOT NULL,
    "backText" TEXT NOT NULL,
    "interval" REAL NOT NULL DEFAULT 0.1,
    "n" INTEGER NOT NULL DEFAULT 0,
    "efactor" REAL NOT NULL DEFAULT 2.5
);
INSERT INTO "new_Collection" ("backText", "createdAt", "efactor", "frontText", "id", "interval", "n") SELECT "backText", "createdAt", "efactor", "frontText", "id", "interval", "n" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
