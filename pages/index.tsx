import React from "react";
import { GetStaticProps } from "next";
import { useSession } from "next-auth/client";

import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Home/Banner/Banner";
import FreshTracks from "@/components/Home/FreshTracks/FreshTracks";
import Ads from "@/components/Home/Ads/Ads";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

import prisma from "@/prisma/client";

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await prisma.song.findMany({
        include: {
            artist: true,
            genres: true,
        },
    });

    const res1 = await prisma.song.findMany({
        include: {
            artist: true,
            genres: true,
        },
        orderBy: {
            rating: "desc",
        },
        take: 9,
    });

    const songs = res.map((song) => ({
        ...song,
        date: song.date.toDateString(),
    }));

    const ratingSongs = res1.map((song) => ({
        ...song,
        date: song.date.toDateString(),
    }));

    return {
        props: {
            songs,
            ratingSongs,
        }, // will be passed to the page component as props
        revalidate: 1,
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
        </>
    );
}
