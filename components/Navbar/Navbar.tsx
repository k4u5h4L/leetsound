import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { options, useSession } from "next-auth/client";

export default function Navbar() {
    const router = useRouter();

    const [session] = useSession();

    const searchRef = useRef("");

    const searchChangeHandler = (e: any): void => {
        searchRef.current = e.target.value;
    };

    const searchSubmitHandler = (): void => {
        // router.push(`/search?q=${encodeURI(searchRef.current)}`, {
        //     shallow: true
        // });
        router.push(
            {
                pathname: "/search",
                query: { q: searchRef.current },
            },
            // `/search?q=${encodeURI(searchRef.current)}`,
            undefined,
            { shallow: true }
        );
    };

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
                            <form
                                className="uk-search uk-search-default uk-width-1-1"
                                onSubmit={() => searchSubmitHandler()}
                            >
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
                                    onChange={(e) => searchChangeHandler(e)}
                                />
                            </form>
                        </div>
                        <ul className="uk-navbar-nav uk-visible@m">
                            {!session ? (
                                <li>
                                    <Link href="/login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    Hello,{" "}
                                    <b>
                                        {session.user.name ||
                                            session.user.email}
                                    </b>
                                </li>
                            )}
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
