import { ArtistType, AlbumType, GenreType } from "@/types/index";

export interface SongType {
    id: string;
    rating: number;
    cover: string;
    length: number;
    artist: ArtistType;
    name: String;
    album: AlbumType;
    genres: [GenreType];
}
