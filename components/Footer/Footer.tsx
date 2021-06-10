import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="uk-section uk-section-default">
            <div
                className="
                    uk-container
                    uk-container-large
                    uk-text-secondary
                    uk-text-500
                "
            >
                <div className="uk-child-width-1-2@s" data-uk-grid>
                    <div>
                        <Link href="/">
                            <a className="uk-logo">
                                <Image
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={160}
                                    height={60}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="uk-flex uk-flex-middle uk-flex-right@s">
                        <div
                            data-uk-grid
                            className="uk-child-width-auto uk-grid-small"
                        >
                            <div>
                                <a
                                    href="https://www.facebook.com/"
                                    data-uk-icon="icon: facebook; ratio: 0.8"
                                    className="uk-icon-button facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                ></a>
                            </div>
                            <div>
                                <a
                                    href="https://www.instagram.com/"
                                    data-uk-icon="icon: instagram; ratio: 0.8"
                                    className="uk-icon-button instagram"
                                    target="_blank"
                                    rel="noreferrer"
                                ></a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    data-uk-icon="icon: twitter; ratio: 0.8"
                                    className="uk-icon-button twitter"
                                    target="_blank"
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="uk-child-width-1-2@s uk-child-width-1-4@m"
                    data-uk-grid
                >
                    <div>
                        <ul className="uk-list">
                            <li>
                                <a className="uk-link-text" href="#">
                                    Music collections
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    Exclusive Music
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    Stores
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="uk-list">
                            <li>
                                <a className="uk-link-text" href="#">
                                    Cheerful Mood
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    Woman Up{" "}
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    Top Secret
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="uk-list">
                            <li>
                                <a className="uk-link-text" href="#">
                                    Science Fiction Double
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    The Art of Adventure
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    Light On Your Feet
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="uk-list">
                            <li>
                                <a className="uk-link-text" href="#">
                                    Music Search
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a className="uk-link-text" href="#">
                                    Sign In{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="uk-margin-medium-top uk-text-small uk-text-muted">
                    <div>
                        Made by a
                        <a className="uk-link-muted" href="#" target="_blank">
                            Meteors
                        </a>
                        .
                    </div>
                </div>
            </div>
        </footer>
    );
}
