/*
  Warnings:

  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PlaylistToSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Playlist";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PlaylistToSong";
PRAGMA foreign_keys=on;
