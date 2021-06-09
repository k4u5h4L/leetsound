import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Song from "@/components/Song/Song";
import SongDesc from "@/components/SongDesc/SongDesc";
import Related from "@/components/Related/Related";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

import AudioPlayer from "react-h5-audio-player";

export default function SingleSong() {
    return (
        <>
            <Navbar />
            <Song />
            <SongDesc />
            <Related />
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
