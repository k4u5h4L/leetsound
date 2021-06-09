import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, {
        providers: [
            // Providers.GitHub({
            //     clientId: process.env.GITHUB_CLIENT_ID,
            //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
            // }),

            Providers.Email({
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: parseInt(process.env.EMAIL_SERVER_PORT),
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD,
                    },
                },
                from: process.env.EMAIL_FROM,
            }),
            // Providers.Email({
            //     server: process.env.EMAIL_SERVER,
            //     from: process.env.EMAIL_FROM,
            // }),
        ],
        // debug: process.env.NODE_ENV === "development",
        debug: false,
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        database: process.env.DATABASE_URL,
        callbacks: {
            async redirect(url, baseUrl) {
                return "/";
            },
        },
        pages: {
            // signIn: "/auth/signin",
            signIn: "/login",
            signOut: "/auth/signout",
            error: "/auth/error", // Error code passed in query string as ?error=
            verifyRequest: "/login/verify", // (used for check email message)
            newUser: "/login/newuser", // If set, new users will be directed here on first sign in
        },
    });

// const options = {
//   site: process.env.NEXTAUTH_URL,
//   providers: [
//     Providers.Email({
//       server: {
//         port: 465,
//         host: 'smtp.gmail.com',
//         secure: true,
//         auth: {
//           user: process.env.EMAIL_USERNAME,
//           pass: process.env.EMAIL_PASSWORD,
//         },
//         tls: {
//           rejectUnauthorized: false,
//         },
//       },
//       from: process.env.EMAIL_FROM,
//     })
//   ],
//   database: process.env.DATABASE_URL
// }
