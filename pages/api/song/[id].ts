import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    console.log("buffer called");

    const path = `${process.cwd()}/music/Alisky-Grow.flac`;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(path, { start, end });
        const head = {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "audio/flac",
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            "Content-Length": fileSize,
            "Content-Type": "audio/flac",
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
};
