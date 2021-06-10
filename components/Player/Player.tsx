import React, { useRef } from "react";
import { isMobile } from "react-device-detect";
import ReactJkMusicPlayer from "react-jinke-music-player";

const Player = () => {
    const playerRef = useRef(null);
    return (
        <ReactJkMusicPlayer
            getAudioInstance={(instance) => {
                playerRef.current = instance;
            }}
            quietUpdate
            showThemeSwitch={true}
            showPlay
            showMediaSession={true}
            showReload
            toggleMode={true}
            autoPlay={false}
            audioLists={[
                {
                    musicSrc: "/api/song/1",
                    name: "Conquer",
                    singer: "Magnus",
                    cover: "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/4c/c4/9c/4cc49cca-8197-16a9-1268-8273d35304c4/20UMGIM07401.rgb.jpg/400x400bb.jpeg",
                },
                {
                    musicSrc:
                        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
                    name: "Hey there",
                    singer: "Hrvy",
                    cover: "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/4c/c4/9c/4cc49cca-8197-16a9-1268-8273d35304c4/20UMGIM07401.rgb.jpg/400x400bb.jpeg",
                },
            ]}
            theme="auto"
            glassBg
            mode={isMobile ? "mini" : "full"}
        />
    );
};

export default Player;
