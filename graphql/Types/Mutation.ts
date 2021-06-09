import { stringArg, nonNull, mutationType } from "nexus";
import { AuthenticationError, ApolloError } from "apollo-server-micro";
import { uuid } from "uuidv4";

import dbConnect from "@/utils/dbConnect";
import Note from "@/models/Note";
import Todo from "@/models/Todo";
import Chat from "@/models/Chat";
import { ChatType } from "@/types/ChatType";

export const Mutation = mutationType({
    definition(t) {
        t.field("createNote", {
            type: "Note",
            args: {
                email: nonNull(stringArg()),
                desc: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, desc }: { email: string; desc: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const note = {
                            desc: desc,
                        };

                        const newNote = await Note.findOneAndUpdate(
                            { email: email },
                            { $push: { list: note } }
                        );

                        if (!newNote) {
                            console.log("does not exist");
                        }

                        return newNote;
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

        t.field("deleteNote", {
            type: "Note",
            args: {
                email: nonNull(stringArg()),
                desc: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, desc }: { email: string; desc: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const newNote = await Note.findOneAndUpdate(
                            { email: email },
                            { $pull: { list: { desc: desc } } }
                        );

                        if (!newNote) {
                            console.log("does not exist");
                        }

                        return newNote;
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

        t.field("createTodo", {
            type: "Todo",
            args: {
                email: nonNull(stringArg()),
                desc: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, desc }: { email: string; desc: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const todo = {
                            desc: desc,
                            status: false,
                        };

                        const newTodo = await Todo.findOneAndUpdate(
                            { email: email },
                            { $push: { list: todo } }
                        );

                        if (!newTodo) {
                            console.log("does not exist");
                        }

                        return newTodo;
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

        t.field("deleteTodo", {
            type: "Todo",
            args: {
                email: nonNull(stringArg()),
                desc: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, desc }: { email: string; desc: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const newTodo = await Todo.findOneAndUpdate(
                            { email: email },
                            { $pull: { list: { desc: desc } } }
                        );

                        if (!newTodo) {
                            console.log("does not exist");
                        }

                        return newTodo;
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

        t.field("completeTodo", {
            type: "Todo",
            args: {
                email: nonNull(stringArg()),
                desc: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, desc }: { email: string; desc: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        let newTodo = await Todo.findOne({
                            email: email,
                        });

                        if (!newTodo) {
                            console.log("does not exist");
                            return null;
                        }

                        // newTodo.list = newTodo.list.filter(
                        //     (todo: { desc: string; status: boolean }) =>
                        //         todo.desc != desc
                        // );

                        newTodo.list.forEach(
                            (todo: { desc: string; status: boolean }) => {
                                if (todo.desc == desc) {
                                    todo.status = !todo.status;
                                }
                            }
                        );

                        const updatedTodo = await Todo.findOneAndUpdate(
                            { email: email },
                            { ...newTodo }
                        );

                        return updatedTodo;
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

        t.field("createChat", {
            type: "Chat",
            args: {
                email: nonNull(stringArg()),
                name: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (
                _root,
                { email, name }: { email: string; name: string },
                ctx
            ) => {
                await dbConnect();

                if (ctx.session) {
                    const newChat = await new Chat({
                        chatId: uuid(),
                        members: [
                            {
                                name: ctx.session.user.name,
                                email: ctx.session.user.email,
                            },
                            { name: name, email: email },
                        ],
                    });

                    newChat.save();

                    return newChat;
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });
    },
});
