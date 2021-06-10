import { SongType, ArtistType } from "@/types/index";

export interface AlbumType {
    id: string;
    name: string;
    songs: [SongType];
    artist: ArtistType;
}
