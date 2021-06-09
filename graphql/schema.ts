import { makeSchema } from "nexus";
import path from "path";
import * as types from "./Types";

export const schema = makeSchema({
    types,
    outputs: {
        schema: path.join(process.cwd(), "schema.graphql"),
        typegen: path.join(process.cwd(), "graphql", "generated", "nexus.ts"),
    },
    //   typegenAutoConfig: {
    //     sources: [
    //       {
    //         alias: "faces",
    //         source: path.join(process.cwd(), "src", "interfaces.ts"),
    //         typeMatch: (type) => new RegExp(`(${type}Interface)`),
    //       },
    //     ],
    //     backingTypeMap: {
    //       Date: "Date",
    //       URL: "URL",
    //     },
    //     debug: process.env.NODE_ENV === "development",
    //   },
});
