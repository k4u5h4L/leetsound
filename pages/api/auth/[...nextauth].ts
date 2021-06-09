import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import prisma from "@/prisma/client";

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
                    port: Number(process.env.EMAIL_SERVER_PORT),
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD,
                    },
                },
                from: process.env.EMAIL_FROM,
            }),
        ],
        debug: process.env.NODE_ENV === "development",
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        callbacks: {
            async redirect(url, baseUrl) {
                return "/";
            },
        },
        adapter: Adapters.Prisma.Adapter({ prisma }),
        pages: {
            // signIn: "/auth/signin",
            signIn: "/login",
            signOut: "/auth/signout",
            error: "/auth/error", // Error code passed in query string as ?error=
            verifyRequest: "/login/verify", // (used for check email message)
            // newUser: "/login/newuser", // If set, new users will be directed here on first sign in
            newUser: null,
        },
    });
