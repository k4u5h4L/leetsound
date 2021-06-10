// @ts-ignore
import { objectType } from "nexus";

export const Artist = objectType({
    name: "Artist",
    definition(t: any) {
        t.model.id();
        t.model.name();
        t.model.albums();
        t.model.songs();
    },
});
