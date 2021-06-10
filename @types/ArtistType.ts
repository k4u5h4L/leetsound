import { AlbumType, SongType } from "@/types/index";

export interface ArtistType {
    id: string;
    name: string;
    songs: [SongType];
    albums: [AlbumType];
}
