import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar/Navbar";
import Song from "@/components/Song/Song";
import SongDesc from "@/components/SongDesc/SongDesc";
import Related from "@/components/Related/Related";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

import prisma from "@/prisma/client";
import { SongType } from "@/types/index";

const Player = dynamic(() => import("@/components/Player/Player"), {
    ssr: false,
});

export const getStaticPaths: GetStaticPaths = async () => {
    const songs = await prisma.song.findMany({});

    // @ts-ignore
    const paths = songs.map((song: SongType) => ({
        params: { id: song.id },
    }));

    // // We'll pre-render only these paths at build time.
    // // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const songId: string = `${context.params.id}`;

    const res = await prisma.song.findFirst({
        where: { id: songId },
        include: {
            artist: true,
            genres: true,
            album: true,
        },
    });

    const song = { ...res, date: res.date.toDateString() };

    // console.log(song);

    return {
        props: {
            song,
        }, // will be passed to the page component as props
        revalidate: 1,
    };
};

export default function SingleSong({ song }) {
    return (
        <>
            <Navbar />
            <Song song={song} />
            <SongDesc song={song} />
            <Related />
            <Footer />
            <BottomLinks />

            <Player />
        </>
    );
}
