import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Songs from "@/components/Songs/Songs";
import Ads from "@/components/Home/Ads/Ads";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

import AudioPlayer from "react-h5-audio-player";

export default function Search() {
    return (
        <>
            <Navbar />
            <Songs />
            <Ads />
            <Footer />
            <BottomLinks />

            <AudioPlayer
                autoPlay={false}
                src="/api/song/1"
                onPlay={(e) => console.log("onPlay")}
                // other props here
                style={{ bottom: 0, position: "fixed", right: 0 }}
            />
        </>
    );
}