import { ApolloServer /* , AuthenticationError */ } from "apollo-server-micro";
import { getSession } from "next-auth/client";
import DataLoader from "dataloader";

import prisma from "@/prisma/client";
import { schema } from "@/graphql/schema";

const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
        // get user's session
        const session = await getSession({ req });
        // console.log("USER SESSION", session); // <-- userSession is ALWAYS null

        // if (!userSession) {
        //     throw new AuthenticationError("User is not logged in.");
        // }

        // return { db, dataloaders, userSession };
        return { prisma, session };
    },
    playground: {
        settings: {
            //   "editor.theme": "light",
            "request.credentials": "same-origin",
        },
    },
});
const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
