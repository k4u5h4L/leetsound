import { ApolloServer /* , AuthenticationError */ } from "apollo-server-micro";
import { getSession } from "next-auth/client";
import dbConnect from "@/utils/dbConnect";
import { schema } from "@/graphql/schema";

const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
        await dbConnect();

        // get user's session
        const session = await getSession({ req });
        // console.log("USER SESSION", session); // <-- userSession is ALWAYS null

        // if (!userSession) {
        //     throw new AuthenticationError("User is not logged in.");
        // }

        // return { db, dataloaders, userSession };
        return { session };
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

/* 
GraphQl stuff:

-  Helps frontend engineers to better develop products by having to choose the data they want to consume.

-  Helps backend engineers by making it easier to maintain the API.

-  Increases the efficiency of the query by not underfetching or overfetching the data.

-  Can help in scaling as less number of requests need to be made.

-  Is self documented. i.e. has documentation of the schema, types, etc so that the consumer of the API knows exactly what to expect.

-  Can allow for better version changes compared to REST. No need to main /v1/ or /v2/ routes.


SE stuff in GraphQL:

-  Majorly falls under design. Specifically design of APIs.

*/
