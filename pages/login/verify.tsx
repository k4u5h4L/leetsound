import React from "react";

export default function Verify() {
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
                <div className="uk-width-3-4@s">
                    <div className="uk-text-center uk-margin-bottom">
                        <a className="uk-navbar-item uk-logo" href="index.html">
                            <img src="/images/logo%402x.png" alt="logo" />
                        </a>
                    </div>
                    <div className="uk-text-center uk-margin-medium-bottom">
                        <h4 className="uk-h2 uk-letter-spacing-small">
                            We have sent a verification email to the email you
                            provided. Click on the link to be logged in.
                            <br />
                            <br />
                            If its your first time here, then your account will
                            be created!
                        </h4>
                    </div>
                </div>
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
