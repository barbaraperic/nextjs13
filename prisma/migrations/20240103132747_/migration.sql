/*
  Warnings:

  - You are about to alter the column `interval` on the `Collection` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frontText" TEXT NOT NULL,
    "backText" TEXT NOT NULL,
    "interval" INTEGER NOT NULL DEFAULT 1,
    "efactor" REAL NOT NULL DEFAULT 2.5
);
INSERT INTO "new_Collection" ("backText", "createdAt", "efactor", "frontText", "id", "interval") SELECT "backText", "createdAt", "efactor", "frontText", "id", "interval" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
