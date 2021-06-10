import { makeSchema } from "nexus";
import path from "path";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";

import * as types from "./Types";

export const schema = makeSchema({
    types,
    // plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
    plugins: [
        nexusSchemaPrisma({
            outputs: {
                typegen: process.cwd() + "typegen-nexus-plugin-prisma.d.ts",
            },
            experimentalCRUD: true,
        }),
    ],
    outputs: {
        schema: path.join(process.cwd(), "schema.graphql"),
        typegen: path.join(process.cwd(), "nexus.ts"),
    },
    typegenAutoConfig: {
        sources: [
            {
                alias: "faces",
                source: path.join(process.cwd(), "src", "interfaces.ts"),
                typeMatch: (type) => new RegExp(`(${type}Interface)`),
            },
        ],
        backingTypeMap: {
            Date: "Date",
            URL: "URL",
        },
        debug: process.env.NODE_ENV === "development",
    },
});
