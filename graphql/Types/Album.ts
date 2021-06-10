import { objectType } from "nexus";

export const Album = objectType({
    name: "Album",
    definition(t: any) {
        t.model.id();
        t.model.name();
        t.model.Artist();
        t.model.songs();
    },
});
