import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Song from "@/components/Song/Song";
import SongDesc from "@/components/SongDesc/SongDesc";
import Related from "@/components/Related/Related";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("@/components/Player/Player"), {
    ssr: false,
});

export default function SingleSong() {
    return (
        <>
            <Navbar />
            <Song />
            <SongDesc />
            <Related />
            <Footer />
            <BottomLinks />

            <Player />
        </>
    );
}
