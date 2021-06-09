import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Home/Banner/Banner";
import FreshTracks from "@/components/Home/FreshTracks/FreshTracks";
import Ads from "@/components/Home/Ads/Ads";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

export default function Home() {
    return (
        <>
            {/* <ReactAudioPlayer src="/api/song/1" autoPlay controls /> */}

            <Navbar />
            <Banner />
            <FreshTracks />
            <Ads />
            <Footer />
            <BottomLinks />
        </>
    );
}
