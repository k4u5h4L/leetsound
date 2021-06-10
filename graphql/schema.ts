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
                typegen: path.join(
                    process.cwd(),
                    "graphql",
                    "generated",
                    "index.ts"
                ),
            },
            experimentalCRUD: true,
        }),
    ],
    outputs: {
        schema: path.join(process.cwd(), "schema.graphql"),
        typegen: path.join(process.cwd(), "graphql", "generated", "nexus.ts"),
    },

    // typegenAutoConfig: {
    //     sources: [
    //         {
    //             source: "@prisma/client",
    //             alias: "client",
    //         },
    //         {
    //             source: require.resolve("@/prisma/client"),
    //             alias: "Context",
    //         },
    //     ],
    //     contextType: "Context.Context",
    // },

    // typegenAutoConfig: {
    //     sources: [
    //         {
    //             alias: "faces",
    //             source: path.join(process.cwd(), "src", "interfaces.ts"),
    //             typeMatch: (type) => new RegExp(`(${type}Interface)`),
    //         },
    //     ],
    //     backingTypeMap: {
    //         Date: "Date",
    //         URL: "URL",
    //     },
    //     debug: process.env.NODE_ENV === "development",
    // },
});
