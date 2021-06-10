import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SongType } from "@/types/index";

export default function Songs({ songs }) {
    return (
        <div className="uk-section uk-section-default">
            <div className="uk-container uk-container-large">
                <div data-uk-grid>
                    <div className="uk-width-expand@m">
                        <div data-uk-grid>
                            <div className="uk-width-expand@m">
                                <h2 className="uk-heading-small">Search</h2>
                            </div>
                        </div>
                        {songs.length != 0 ? (
                            <div
                                className="uk-child-width-1-2 uk-child-width-1-6@s"
                                data-uk-grid
                            >
                                {songs.map((song: SongType, index: number) => (
                                    <div key={index}>
                                        <div className="uk-card">
                                            <div
                                                className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                            >
                                                <Image
                                                    className="uk-border-rounded-medium"
                                                    src={song.cover}
                                                    alt={`alt-${song.name}`}
                                                    width={197}
                                                    height={197}
                                                    layout="intrinsic"
                                                />
                                                {/* <img
                                                className="uk-border-rounded-medium"
                                                src={song.cover}
                                                alt={`alt-${song.name}`}
                                            /> */}

                                                <div
                                                    className="
                                                uk-position-cover
                                                uk-card-overlay
                                                uk-border-rounded-medium
                                            "
                                                ></div>
                                                <div
                                                    className="
                                                uk-position-xsmall
                                                uk-position-top-right
                                            "
                                                >
                                                    Length{" "}
                                                    {`${
                                                        (song.length / 60)
                                                            .toString()
                                                            .split(".")[0]
                                                    }:${
                                                        (
                                                            song.length % 60
                                                        ).toString().length == 1
                                                            ? `${
                                                                  song.length %
                                                                  60
                                                              }0`
                                                            : song.length % 60
                                                    }`}
                                                </div>
                                            </div>
                                            <div>
                                                <h3
                                                    className="
                                                uk-card-title
                                                uk-text-500
                                                uk-margin-small-bottom
                                                uk-margin-top
                                            "
                                                >
                                                    {song.name}
                                                </h3>
                                                <div
                                                    className="uk-text-xsmall uk-text-muted"
                                                    data-uk-grid
                                                >
                                                    <div
                                                        className="
                                                    uk-width-auto
                                                    uk-flex
                                                    uk-flex-middle
                                                "
                                                    >
                                                        <span
                                                            className="uk-rating-filled"
                                                            data-uk-icon="icon:album; ratio: 0.7"
                                                        ></span>
                                                        <span
                                                            className="
                                                        uk-margin-xsmall-left
                                                    "
                                                        >
                                                            {song.album.name}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                                    >
                                                        by{" "}
                                                        <b>
                                                            {song.artist.name}
                                                        </b>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href={`/song/${song.id}`}>
                                                <a className="uk-position-cover"></a>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="uk-child-width-1-2 uk-child-width-1-6@s"
                                data-uk-grid
                            >
                                <div className="uk-width-expand@m">
                                    <h3 className="uk-heading-small">
                                        No results found {`:(`}
                                    </h3>
                                </div>
                            </div>
                        )}

                        {/* <div className="uk-margin-large-top uk-text-small">
                            <ul
                                className="
                                    uk-pagination
                                    uk-flex-center
                                    uk-text-500
                                    uk-margin-remove
                                "
                                data-uk-margin
                            >
                                <li>
                                    <a href="#">
                                        <span
                                            data-uk-pagination-previous
                                        ></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li className="uk-active">
                                    <span>2</span>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span data-uk-pagination-next></span>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
