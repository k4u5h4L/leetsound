import React, { useRef, useContext, useEffect } from "react";
import { isMobile } from "react-device-detect";
import ReactJkMusicPlayer from "react-jinke-music-player";

import { QueueContext } from "@/utils/queueContext";

const Player = () => {
    const { queue, setQueue } = useContext(QueueContext);
    const playerRef = useRef(null);

    useEffect(() => {
        console.log("queue", queue);
    }, [queue]);

    return (
        <ReactJkMusicPlayer
            getAudioInstance={(instance) => {
                playerRef.current = instance;
            }}
            quietUpdate
            // remember={true}
            clearPriorAudioLists
            showThemeSwitch={true}
            showPlay
            showMediaSession={true}
            showReload
            toggleMode={true}
            autoPlay={false}
            audioLists={queue}
            theme="auto"
            glassBg
            mode={isMobile ? "mini" : "full"}
        />
    );
};

export default Player;
