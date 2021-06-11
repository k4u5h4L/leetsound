import React, { useRef, useContext, useEffect, useState } from "react";
// import Router from "next/router";
import { isMobile } from "react-device-detect";
import ReactJkMusicPlayer from "react-jinke-music-player";

import { QueueContext } from "@/utils/queueContext";
import { checkIfExists } from "@/utils/checkPaths";

// import "react-jinke-music-player/assets/index.css";
// import styles from "react-jinke-music-player/assets/index.module.css";

const Player = () => {
    const { queue, setQueue } = useContext(QueueContext);
    const playerRef = useRef(null);
    // const [render, setRender] = useState<boolean>(true);

    // useEffect(() => {
    //     const oldQueue: string = localStorage.getItem("leetsound-queue");

    //     if (oldQueue) {
    //         const q = JSON.parse(oldQueue);
    //         if (q.length == 0) {
    //             setQueue([
    //                 {
    //                     musicSrc: "/api/song/1",
    //                     name: "Conquer",
    //                     singer: "Magnus",
    //                     cover: "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/4c/c4/9c/4cc49cca-8197-16a9-1268-8273d35304c4/20UMGIM07401.rgb.jpg/400x400bb.jpeg",
    //                 },
    //             ]);
    //         } else {
    //             setQueue(q);
    //         }
    //     } else {
    //         setQueue([
    //             {
    //                 musicSrc: "/api/song/1",
    //                 name: "Conquer",
    //                 singer: "Magnus",
    //                 cover: "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/4c/c4/9c/4cc49cca-8197-16a9-1268-8273d35304c4/20UMGIM07401.rgb.jpg/400x400bb.jpeg",
    //             },
    //         ]);
    //     }
    // }, []);

    useEffect(() => {
        console.log("queue", queue);
    }, [queue]);

    // useEffect(() => {
    //     if (!checkIfExists(Router.route)) {
    //         setRender(false);
    //     }

    //     Router.events.on("routeChangeComplete", (url) => {
    //         console.log("url", url);

    //         if (!checkIfExists(Router.route)) {
    //             setRender(false);
    //         }
    //     });
    // }, []);

    return (
        <>
            <ReactJkMusicPlayer
                getAudioInstance={(instance) => {
                    playerRef.current = instance;
                }}
                // className={styles}
                quietUpdate
                // remember={true}
                clearPriorAudioLists
                showThemeSwitch={true}
                // showPlay
                showMediaSession={true}
                showReload
                toggleMode={true}
                autoPlay={false}
                audioLists={queue}
                theme="auto"
                glassBg
                mode={isMobile ? "mini" : "full"}
            />
            {/* <ReactJkMusicPlayer autoPlay={false} audioLists={queue} /> */}
        </>
    );
};

export default Player;
