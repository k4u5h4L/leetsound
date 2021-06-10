import React from "react";
import Link from "next/link";

import { SongType } from "@/types/index";

export default function FreshTracks({ songs, ratingSongs }) {
    return (
        <div className="uk-section uk-section-default">
            <div className="uk-container uk-container-large">
                <div data-uk-grid>
                    <div className="uk-width-expand@m">
                        <div data-uk-grid>
                            <div className="uk-width-expand@m">
                                <h2 className="uk-heading-small">
                                    Fresh tracks
                                </h2>
                            </div>
                        </div>
                        <div
                            className="uk-child-width-1-2 uk-child-width-1-4@s"
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
                                            <img
                                                className="uk-border-rounded-medium"
                                                src={song.cover}
                                                alt="Birth of a Star"
                                            />
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
                                                Length:{" "}
                                                {`${
                                                    (song.length / 60)
                                                        .toString()
                                                        .split(".")[0]
                                                }:${
                                                    (
                                                        song.length % 60
                                                    ).toString().length == 1
                                                        ? `${song.length % 60}0`
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
                                                        data-uk-icon="icon:play-circle; ratio: 0.7"
                                                    ></span>
                                                    <span
                                                        className="
                                                        uk-margin-xsmall-left
                                                    "
                                                    >
                                                        {song.genres[0].name}
                                                    </span>
                                                </div>
                                                <div
                                                    className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                                >
                                                    by {song.artist.name}
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={`/song/${song.id}`}>
                                            <a className="uk-position-cover"></a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            {/* <div tabIndex={0} className="uk-animation-toggle">
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/2.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Devorame · Natti Natasha
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/3.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Abraham Mateo: A Cámo
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/4.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Nuevos Sonidos Argentinos
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/5.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Nuevos Sonidos Trap
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/6.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Mau y Ricky (Tema x Tema)
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/7.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Día de Rock 2020
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/8.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Pop Urbano por Chyno Nacho
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/9.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Clásicos del Rock Colombiano
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/10.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Rock En Español
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/11.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Clásicos del Rock Argentino
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div
                                        className="
                                            uk-card-media-top uk-inline uk-light
                                        "
                                    >
                                        <img
                                            className="uk-border-rounded-medium"
                                            src="images/12.jpg"
                                            alt="Birth of a Star"
                                        />
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
                                            Length 2:23
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
                                            Rock Colombia
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
                                                    data-uk-icon="icon:play-circle; ratio: 0.7"
                                                ></span>
                                                <span
                                                    className="
                                                        uk-margin-xsmall-left
                                                    "
                                                >
                                                    BPM 122
                                                </span>
                                            </div>
                                            <div
                                                className="
                                                    uk-width-expand
                                                    uk-text-right
                                                "
                                            >
                                                by Kevin Maison
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="single.html"
                                        className="uk-position-cover"
                                    ></a>
                                </div>
                            </div> */}
                        </div>
                        <div className="uk-margin-large-top uk-text-small">
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
                        </div>
                    </div>
                    <div className="uk-width-1-4@m sticky-container">
                        <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
                            <h2 className="uk-margin-bottom mt-10 uk-heading-small">
                                Top music
                            </h2>
                            {ratingSongs.map(
                                (song: SongType, index: number) => (
                                    <Link href={`/song/${song.id}`} key={index}>
                                        <a
                                            className="display-bl uk-animation-toggle"
                                            tabIndex={0}
                                        >
                                            <span
                                                data-uk-icon="icon: play-circle; ratio:1"
                                                className="
                                        uk-icon
                                        icon-music
                                        uk-animation-slide-left-small
                                    "
                                            ></span>
                                            <h3
                                                className="
                                        uk-card-title
                                        uk-text-500
                                        uk-margin-small-bottom
                                        uk-margin-small-top
                                        display-inline
                                        uk-animation-slide-left-small
                                    "
                                            >
                                                {song.name} · {song.artist.name}
                                            </h3>
                                        </a>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
