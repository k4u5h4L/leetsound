import React from "react";

export default function Navbar() {
    return (
        <nav className="uk-navbar-container uk-letter-spacing-small">
            <div className="uk-container uk-container-large">
                <div className="uk-position-z-index" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <a className="uk-navbar-item uk-logo" href="index.html">
                            <img src="images/logo%402x.png" alt="logo" />
                        </a>
                        <ul
                            className="
                                uk-navbar-nav uk-visible@m uk-margin-large-left
                            "
                        >
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="category.html">Music collections</a>
                            </li>
                            <li>
                                <a href="category.html">category</a>
                            </li>
                            <li>
                                <a href="search.html">search</a>
                            </li>
                            <li>
                                <a href="single.html">The single</a>
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
                                <a href="sign-in.html">Sign In</a>
                            </li>
                            <li>
                                <a href="sign-up.html">Sign Up</a>
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
