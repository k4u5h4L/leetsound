import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import Todo from "@/models/Todo";
import Note from "@/models/Note";
// import Chat from "@/models/Chat";
import { InfoType } from "@/types/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect();
            const session = await getSession({ req });

            console.log(req.body);
            const info: InfoType = req.body;

            const user = await User.findOneAndUpdate(
                { email: session.user.email },
                info
            );

            const n = await new Todo({ email: session.user.email, list: [] });
            n.save();

            const to = await new Note({ email: session.user.email, list: [] });
            to.save();

            console.log(user);

            res.status(200).json({ message: "everything was fine" });
        } catch (err: any) {
            res.status(500).json({ message: "POST data is incorrect" });
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
