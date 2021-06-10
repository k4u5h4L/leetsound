import { objectType } from "nexus";

export const Song = objectType({
    name: "Song",
    definition(t: any) {
        t.model.id();
        t.model.album();
        t.model.artist();
        t.model.cover();
        t.model.date();
        t.model.desc();
        t.model.length();
        t.model.rating();
        t.model.name();
        t.model.genres();
    },
});
