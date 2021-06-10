import React, { useContext } from "react";
import Image from "next/image";

import { QueueContext } from "@/utils/queueContext";

export default function Song({ song }) {
    const { queue, setQueue } = useContext(QueueContext);

    const pushToQueue = () => {
        setQueue((prevVal) => [
            ...prevVal,
            {
                musicSrc: `/api/song/${song.id}`,
                name: song.name,
                singer: song.artist.name,
                cover: song.cover,
            },
        ]);
    };

    return (
        <div className="uk-container uk-container-large">
            <div data-uk-grid>
                <div className="uk-width-1-3@s">
                    <div>
                        <Image
                            className="uk-border-rounded-large width-100"
                            src={song.cover}
                            alt={`${song.name}-alt`}
                            width={435}
                            height={435}
                        />
                    </div>
                </div>
                <div className="uk-width-expand@s uk-flex uk-flex-middle">
                    <div>
                        <h1>{song.name}</h1>
                        <p>{song.desc}</p>
                        {/* <br /> */}
                        <div
                            className="
                                uk-margin-medium-top
                                uk-child-width-expand
                                uk-text-center
                                uk-grid-divider
                            "
                            data-uk-grid
                        >
                            <div>
                                <span data-uk-icon="icon: album; ratio: 1.4"></span>
                                <h5
                                    className="
                                        uk-text-500
                                        uk-margin-small-top
                                        uk-margin-remove-bottom
                                    "
                                >
                                    Album
                                </h5>
                                <span className="uk-text-small">
                                    {song.album.name}
                                </span>
                            </div>
                            <div>
                                <span data-uk-icon="icon: star; ratio: 1.4"></span>
                                <h5
                                    className="
                                        uk-text-500
                                        uk-margin-small-top
                                        uk-margin-remove-bottom
                                    "
                                >
                                    Rating
                                </h5>
                                <span className="uk-text-small">
                                    {song.rating}
                                </span>
                            </div>
                            <div>
                                <span data-uk-icon="icon: user; ratio: 1.4"></span>
                                <h5
                                    className="
                                        uk-text-500
                                        uk-margin-small-top
                                        uk-margin-remove-bottom
                                    "
                                >
                                    Artist
                                </h5>
                                <span className="uk-text-small">
                                    {song.artist.name}
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div data-uk-grid>
                            <div className="uk-width-auto@s uk-text-small">
                                <p
                                    className="
                                        uk-margin-small-top
                                        uk-margin-remove-bottom
                                    "
                                >
                                    Created on <b>{song.date}</b>
                                </p>
                                <span className="uk-text-muted">
                                    Length{" "}
                                    {`${
                                        (song.length / 60)
                                            .toString()
                                            .split(".")[0]
                                    }:${
                                        (song.length % 60).toString().length ==
                                        1
                                            ? `${song.length % 60}0`
                                            : song.length % 60
                                    }`}
                                </span>
                            </div>

                            <div
                                className="
                                    uk-width-expand@s
                                    uk-flex
                                    uk-flex-middle
                                    uk-flex-right@s
                                "
                            >
                                <a
                                    className="uk-icon-link"
                                    data-uk-icon="icon: play; ratio: 1.2"
                                    data-uk-tooltip="title: Add to queue"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => pushToQueue()}
                                ></a>
                            </div>
                            {/* <audio controls className="width-100">
                                <source
                                    src="audio/demo1.html"
                                    type="audio/ogg"
                                />
                                <source
                                    src="audio/demo1.mp3"
                                    type="audio/mpeg"
                                />
                                Your browser does not support the audio element.
                            </audio> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
