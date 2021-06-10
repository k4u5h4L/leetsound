import { SongType } from "@/types/index";

export interface GenreType {
    id: string;
    name: string;
    songs: [SongType];
}
