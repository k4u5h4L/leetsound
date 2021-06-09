import { PrismaClient } from "@prisma/client";

declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient({ log: ["query"] });
    }

    prisma = global.prisma;
}

export interface Context {
    prisma: PrismaClient;
}

export function createContext(): Context {
    return { prisma };
}

export default prisma;
