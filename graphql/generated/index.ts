import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Song: Prisma.Song
  Album: Prisma.Album
  Artist: Prisma.Artist
  Genre: Prisma.Genre
  Account: Prisma.Account
  Session: Prisma.Session
  User: Prisma.User
  VerificationRequest: Prisma.VerificationRequest
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    songs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'artist' | 'name' | 'album' | 'genres' | 'albumId' | 'artistId'
      ordering: 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'name' | 'albumId' | 'artistId'
    }
    albums: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'songs' | 'Artist' | 'artistId'
      ordering: 'id' | 'name' | 'artistId'
    }
    artists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'songs' | 'albums'
      ordering: 'id' | 'name'
    }
    genres: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'songs'
      ordering: 'id' | 'name'
    }
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'compoundId' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'compoundId' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'createdAt' | 'updatedAt'
    }
    verificationRequests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
    }
  },
  Song: {
    genres: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'songs'
      ordering: 'id' | 'name'
    }
  }
  Album: {
    songs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'artist' | 'name' | 'album' | 'genres' | 'albumId' | 'artistId'
      ordering: 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'name' | 'albumId' | 'artistId'
    }
  }
  Artist: {
    songs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'artist' | 'name' | 'album' | 'genres' | 'albumId' | 'artistId'
      ordering: 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'name' | 'albumId' | 'artistId'
    }
    albums: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'songs' | 'Artist' | 'artistId'
      ordering: 'id' | 'name' | 'artistId'
    }
  }
  Genre: {
    songs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'artist' | 'name' | 'album' | 'genres' | 'albumId' | 'artistId'
      ordering: 'id' | 'rating' | 'date' | 'desc' | 'cover' | 'length' | 'name' | 'albumId' | 'artistId'
    }
  }
  Account: {

  }
  Session: {

  }
  User: {

  }
  VerificationRequest: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    song: 'Song'
    songs: 'Song'
    album: 'Album'
    albums: 'Album'
    artist: 'Artist'
    artists: 'Artist'
    genre: 'Genre'
    genres: 'Genre'
    account: 'Account'
    accounts: 'Account'
    session: 'Session'
    sessions: 'Session'
    user: 'User'
    users: 'User'
    verificationRequest: 'VerificationRequest'
    verificationRequests: 'VerificationRequest'
  },
  Mutation: {
    createOneSong: 'Song'
    updateOneSong: 'Song'
    updateManySong: 'AffectedRowsOutput'
    deleteOneSong: 'Song'
    deleteManySong: 'AffectedRowsOutput'
    upsertOneSong: 'Song'
    createOneAlbum: 'Album'
    updateOneAlbum: 'Album'
    updateManyAlbum: 'AffectedRowsOutput'
    deleteOneAlbum: 'Album'
    deleteManyAlbum: 'AffectedRowsOutput'
    upsertOneAlbum: 'Album'
    createOneArtist: 'Artist'
    updateOneArtist: 'Artist'
    updateManyArtist: 'AffectedRowsOutput'
    deleteOneArtist: 'Artist'
    deleteManyArtist: 'AffectedRowsOutput'
    upsertOneArtist: 'Artist'
    createOneGenre: 'Genre'
    updateOneGenre: 'Genre'
    updateManyGenre: 'AffectedRowsOutput'
    deleteOneGenre: 'Genre'
    deleteManyGenre: 'AffectedRowsOutput'
    upsertOneGenre: 'Genre'
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneSession: 'Session'
    updateOneSession: 'Session'
    updateManySession: 'AffectedRowsOutput'
    deleteOneSession: 'Session'
    deleteManySession: 'AffectedRowsOutput'
    upsertOneSession: 'Session'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneVerificationRequest: 'VerificationRequest'
    updateOneVerificationRequest: 'VerificationRequest'
    updateManyVerificationRequest: 'AffectedRowsOutput'
    deleteOneVerificationRequest: 'VerificationRequest'
    deleteManyVerificationRequest: 'AffectedRowsOutput'
    upsertOneVerificationRequest: 'VerificationRequest'
  },
  Song: {
    id: 'String'
    rating: 'Int'
    date: 'DateTime'
    desc: 'String'
    cover: 'String'
    length: 'Int'
    artist: 'Artist'
    name: 'String'
    album: 'Album'
    genres: 'Genre'
    albumId: 'String'
    artistId: 'String'
  }
  Album: {
    id: 'String'
    name: 'String'
    songs: 'Song'
    Artist: 'Artist'
    artistId: 'String'
  }
  Artist: {
    id: 'String'
    name: 'String'
    songs: 'Song'
    albums: 'Album'
  }
  Genre: {
    id: 'String'
    name: 'String'
    songs: 'Song'
  }
  Account: {
    id: 'Int'
    compoundId: 'String'
    userId: 'Int'
    providerType: 'String'
    providerId: 'String'
    providerAccountId: 'String'
    refreshToken: 'String'
    accessToken: 'String'
    accessTokenExpires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Session: {
    id: 'Int'
    userId: 'Int'
    expires: 'DateTime'
    sessionToken: 'String'
    accessToken: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  User: {
    id: 'Int'
    name: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  VerificationRequest: {
    id: 'Int'
    identifier: 'String'
    token: 'String'
    expires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Song: Typegen.NexusPrismaFields<'Song'>
  Album: Typegen.NexusPrismaFields<'Album'>
  Artist: Typegen.NexusPrismaFields<'Artist'>
  Genre: Typegen.NexusPrismaFields<'Genre'>
  Account: Typegen.NexusPrismaFields<'Account'>
  Session: Typegen.NexusPrismaFields<'Session'>
  User: Typegen.NexusPrismaFields<'User'>
  VerificationRequest: Typegen.NexusPrismaFields<'VerificationRequest'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  