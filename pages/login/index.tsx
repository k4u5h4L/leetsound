import React, { useState, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

export default function Login() {
    const [session] = useSession();

    const [loading, setLoading] = useState<boolean>(false);
    const emailRef = useRef("");

    const handleEmailChange = (e: any) => {
        emailRef.current = e.target.value;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true);

        signIn("email", {
            email: emailRef.current,
            callbackUrl: `/login/verify/`,
            redirect: true,
        });
    };

    return (
        <div className="uk-grid-collapse" data-uk-grid>
            <div
                className="
                    uk-width-1-2@m
                    uk-padding-large
                    uk-flex
                    uk-flex-middle
                    uk-flex-center
                "
                data-uk-height-viewport
            >
                {!session ? (
                    <div className="uk-width-3-4@s">
                        <div className="uk-text-center uk-margin-bottom">
                            <a
                                className="uk-navbar-item uk-logo"
                                href="index.html"
                            >
                                <img src="images/logo%402x.png" alt="logo" />
                            </a>
                        </div>
                        <div className="uk-text-center uk-margin-medium-bottom">
                            <h1 className="uk-h2 uk-letter-spacing-small">
                                Sign In
                            </h1>
                        </div>
                        {/* <div
                        data-uk-grid
                        className="
                            uk-child-width-auto
                            uk-grid-small
                            uk-flex
                            uk-flex-center
                            uk-margin
                        "
                    >
                        <div>
                            <a
                                href="#"
                                data-uk-icon="icon: github"
                                className="
                                    uk-icon-button uk-icon-button-large
                                    github
                                "
                            ></a>
                        </div>
                        <div>
                            <a
                                href="#"
                                data-uk-icon="icon: google-plus"
                                className="
                                    uk-icon-button uk-icon-button-large
                                    google-plus
                                "
                            ></a>
                        </div>
                        <div>
                            <a
                                href="#"
                                data-uk-icon="icon: linkedin"
                                className="
                                    uk-icon-button uk-icon-button-large
                                    linkedin
                                "
                            ></a>
                        </div>
                    </div> */}
                        <form
                            className="uk-text-center"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <div className="uk-width-1-1 uk-margin">
                                <label
                                    className="uk-form-label"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="uk-input uk-form-large uk-text-center"
                                    type="email"
                                    placeholder="Enter yourn email here"
                                    onChange={(e) => handleEmailChange(e)}
                                />
                            </div>
                            {/* <div className="uk-width-1-1 uk-margin">
                            <label className="uk-form-label" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                className="uk-input uk-form-large uk-text-center"
                                type="password"
                                placeholder="Password Min 8 characters"
                            />
                        </div> */}
                            {/* <div className="uk-width-1-1 uk-margin uk-text-center">
                            <a className="uk-text-small uk-link-muted" href="#">
                                forgot password?
                            </a>
                        </div> */}
                            {loading ? (
                                <div className="uk-width-1-1 uk-margin uk-text-center d-flex justify-content-center">
                                    <Image
                                        src="/loading.gif"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ) : null}
                            <div className="uk-width-1-1 uk-text-center">
                                <button
                                    className="
                                    uk-button
                                    uk-button-primary
                                    uk-width-1-1
                                    uk-margin-small-bottom
                                "
                                    type="submit"
                                    onClick={(e) => handleSubmit(e)}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="uk-width-3-4@s">
                        <div className="uk-text-center uk-margin-bottom">
                            <a
                                className="uk-navbar-item uk-logo"
                                href="index.html"
                            >
                                <img src="/images/logo%402x.png" alt="logo" />
                            </a>
                        </div>
                        <div className="uk-text-center uk-margin-medium-bottom">
                            <h4 className="uk-h2 uk-letter-spacing-small">
                                Not{" "}
                                <b>{session.user.name || session.user.email}</b>
                                ?
                            </h4>
                            Then logout and login again!
                        </div>
                        <br />
                        <div className="uk-width-1-1 uk-text-center">
                            <button
                                className="
                                    uk-button
                                    uk-button-primary
                                    uk-width-1-1
                                    uk-margin-small-bottom
                                "
                                type="button"
                                onClick={() => signOut()}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div
                className="
                    uk-width-1-2@m
                    uk-padding-large
                    uk-flex
                    uk-flex-middle
                    uk-flex-center
                    uk-light
                "
                data-uk-height-viewport
            >
                <div
                    className="
                        uk-background-cover
                        uk-background-norepeat
                        uk-background-blend-overlay
                        uk-background-overlay
                        uk-border-rounded-large
                        uk-width-1-1
                        uk-height-xlarge
                        uk-flex
                        uk-flex-middle
                        uk-flex-center
                    "
                    style={{ backgroundImage: `url('images/signin.jpg')` }}
                >
                    <div className="uk-padding-large">
                        <div className="uk-text-left">
                            <h2 className="uk-heading-medium">
                                Extraordinary music.
                            </h2>
                        </div>
                        <div
                            className="
                                uk-margin-top
                                uk-margin-medium-bottom
                                uk-text-left
                            "
                        >
                            <p className="uk-link-text">
                                Join us to experience high quality lossless
                                uncompressed audio streaming right from the
                                website! Immersive audio for your music needs.
                            </p>
                        </div>
                        {/* <div className="uk-width-1-1 uk-text-left">
                            <a
                                href="sign-up.html"
                                className="
                                    uk-button uk-button-primary uk-button-large
                                "
                            >
                                Sign Up
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
