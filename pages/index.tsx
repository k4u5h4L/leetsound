import React from "react";
import { GetStaticProps } from "next";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@/components/Player/Player"), {
    ssr: false,
});

import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Home/Banner/Banner";
import FreshTracks from "@/components/Home/FreshTracks/FreshTracks";
import Ads from "@/components/Home/Ads/Ads";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

import prisma from "@/prisma/client";

export const getStaticProps: GetStaticProps = async (context) => {
    const songs = await prisma.song.findMany({
        include: {
            artist: true,
            genres: true,
        },
    });

    const ratingSongs = await prisma.song.findMany({
        include: {
            artist: true,
            genres: true,
        },
        orderBy: {
            rating: "desc",
        },
        take: 9,
    });

    // console.log(ratingSongs);

    return {
        props: {
            songs,
            ratingSongs,
        }, // will be passed to the page component as props
        revalidate: 5,
    };
};

export default function Home({ songs, ratingSongs }) {
    const [session] = useSession();
    return (
        <>
            <Navbar />
            <Banner />
            <FreshTracks songs={songs} ratingSongs={ratingSongs} />
            {!session ? <Ads /> : null}
            <Footer />
            <BottomLinks />

            <Player />
        </>
    );
}
