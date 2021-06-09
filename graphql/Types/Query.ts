import { queryType, idArg } from "nexus";
import { AuthenticationError } from "apollo-server-micro";

import {
    Note as ChatNote,
    Todo as ChatTodo,
    Chat as ChatConvos,
} from "./index";
import dbConnect from "@/utils/dbConnect";
import Note from "@/models/Note";
import Todo from "@/models/Todo";
import Chat from "@/models/Chat";
import { ChatType } from "@/types/ChatType";

export const Query = queryType({
    definition(t) {
        t.field("NoteByEmail", {
            type: ChatNote,
            description: "Get the notes by its corresponding email of the user",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const note = await Note.findOne({
                            email: email,
                        });

                        if (!note) {
                            console.log("does not exist");
                        }

                        return note;
                    } else {
                        throw new AuthenticationError(
                            `I guess you are not ${email}. If you are, login first before acessing the data.`
                        );
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });

        t.field("TodoByEmail", {
            type: ChatTodo,
            description:
                "Get the Todo tasks by its corresponding email of the user",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const todo = await Todo.findOne({
                            email: email,
                        });

                        if (!todo) {
                            console.log("does not exist");
                        }

                        return todo;
                    } else {
                        throw new AuthenticationError(
                            `I guess you are not ${email}. If you are, login first before acessing the data.`
                        );
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });

        t.list.field("ChatsByEmail", {
            type: ChatConvos,
            description:
                "Get the chats of corresponding user using their email",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const chats = await Chat.find({
                            "members.email": email,
                        });

                        if (!chats) {
                            console.log("does not exist");
                        }

                        return chats;
                    } else {
                        throw new AuthenticationError(
                            `I guess you are not ${email}. If you are, login first before acessing the data.`
                        );
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });

        t.field("ChatByChatId", {
            type: ChatConvos,
            description:
                "Get the chats of corresponding user using the chat ID",
            args: { chatId: idArg() },
            resolve: async (_root, { chatId }: { chatId: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    const chat = await Chat.findOne({
                        chatId: chatId,
                    });

                    if (!chat) {
                        console.log("does not exist");
                    }

                    return chat;
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });
    },
});
