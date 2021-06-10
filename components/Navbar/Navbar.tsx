import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="uk-navbar-container uk-letter-spacing-small">
            <div className="uk-container uk-container-large">
                <div className="uk-position-z-index" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <Link href="/">
                            <a className="uk-navbar-item uk-logo">
                                {/* <Image
                                    src="/images/logo@2x-old.png"
                                    alt="logo"
                                    width={202}
                                    height={38}
                                /> */}
                                <Image
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={160}
                                    height={60}
                                />
                            </a>
                        </Link>
                        <ul
                            className="
                                uk-navbar-nav uk-visible@m uk-margin-large-left
                            "
                        >
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories">
                                    <a>Categories</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/search">
                                    <a>Search</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/song/1">
                                    <a>Single</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right uk-margin-small-right">
                        <div
                            className="
                                uk-width-expand@m
                                uk-first-column
                                uk-margin-small-right
                            "
                        >
                            <form className="uk-search uk-search-default uk-width-1-1">
                                <span
                                    data-uk-search-icon=""
                                    className="uk-icon uk-search-icon"
                                ></span>
                                <input
                                    className="
                                        uk-search-input
                                        uk-text-small
                                        uk-border-rounded
                                        uk-form-large
                                    "
                                    type="search"
                                    placeholder="Search for music..."
                                />
                            </form>
                        </div>
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li>
                                <Link href="/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                        </ul>
                        <a
                            className="uk-navbar-toggle uk-hidden@m"
                            href="#offcanvas"
                            data-uk-toggle
                        >
                            <span data-uk-navbar-toggle-icon></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
