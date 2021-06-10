// @ts-ignore
import { objectType } from "nexus";

export const Genre = objectType({
    name: "Genre",
    definition(t: any) {
        t.model.id();
        t.model.name();
        t.model.songs();
    },
});
