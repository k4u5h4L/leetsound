-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL DEFAULT 7,
    "cover" TEXT NOT NULL,
    "length" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Song" ("albumId", "artistId", "cover", "id", "length", "name") SELECT "albumId", "artistId", "cover", "id", "length", "name" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
