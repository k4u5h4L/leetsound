import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const songs = await prisma.song.findMany({
        include: {
            artist: true,
            genres: true,
        },
    });

    console.log(songs);

    res.status(200).json({ songs: songs });
};
