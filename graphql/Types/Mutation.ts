import { mutationType } from "nexus";
import { AuthenticationError, ApolloError } from "apollo-server-micro";

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneSong();
        t.crud.createOneAlbum();
        t.crud.createOneArtist();
        t.crud.createOneGenre();

        t.crud.deleteOneSong();
        t.crud.deleteOneAlbum();
        t.crud.deleteOneArtist();
        t.crud.deleteOneGenre();
    },
});
