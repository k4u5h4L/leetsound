import { queryType, stringArg } from "nexus";
import { AuthenticationError } from "apollo-server-micro";

import { GraphQLContext } from "@/types/index";
import { Song } from "./Song";

export const Query = queryType({
    definition(t) {
        t.crud.song({
            resolve: (_root, args, ctx: GraphQLContext) => {
                return ctx.prisma.song.findFirst({
                    where: { id: args.where.id },
                });
            },
        });

        t.crud.songs({ pagination: true, filtering: true, ordering: true });

        t.crud.album({
            resolve: (_root, args, ctx: GraphQLContext) => {
                return ctx.prisma.album.findFirst({
                    where: { id: args.where.id },
                });
            },
        });

        t.crud.albums({ pagination: true, filtering: true, ordering: true });

        t.crud.genre({
            resolve: (_root, args, ctx: GraphQLContext) => {
                return ctx.prisma.genre.findFirst({
                    where: { id: args.where.id },
                });
            },
        });

        t.crud.genres({ pagination: true, filtering: true, ordering: true });

        t.crud.artist({
            resolve: (_root, args, ctx: GraphQLContext) => {
                return ctx.prisma.artist.findFirst({
                    where: { id: args.where.id },
                });
            },
        });

        t.crud.artists({ pagination: true, filtering: true, ordering: true });
    },
});
