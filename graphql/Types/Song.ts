import { objectType } from "nexus";

export const Song = objectType({
    name: "Song",
    definition(t: any) {
        t.model.id();
        t.model.album();
        t.model.artist();
        t.model.cover();
        t.model.length();
        t.model.name();
        t.model.genres();
    },
});
