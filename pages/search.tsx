import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Songs from "@/components/Songs/Songs";
import Ads from "@/components/Home/Ads/Ads";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("@/components/Player/Player"), {
    ssr: false,
});

export default function Search() {
    return (
        <>
            <Navbar />
            <Songs />
            <Ads />
            <Footer />
            <BottomLinks />

            <Player />
        </>
    );
}
