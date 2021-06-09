import React from "react";

export default function Song() {
    return (
        <div className="uk-container uk-container-large">
            <div data-uk-grid>
                <div className="uk-width-1-3@s">
                    <div>
                        <img
                            className="uk-border-rounded-large width-100"
                            src="/images/3.jpg"
                            alt="Image alt"
                        />
                    </div>
                </div>
                <div className="uk-width-expand@s uk-flex uk-flex-middle">
                    <div>
                        <h1>They Need Us</h1>
                        <p>
                            Supermarket Edgy and driving, with indie rock
                            elements featuring confident electric gutiar and
                            male aahs to createa masculine and empowering mood
                            PRO free: This track is not registered with
                            performance rights organisations.
                        </p>
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
                                <span data-uk-icon="icon: cog; ratio: 1.4"></span>
                                <h5
                                    className="
                                        uk-text-500
                                        uk-margin-small-top
                                        uk-margin-remove-bottom
                                    "
                                >
                                    Track versions
                                </h5>
                                <span className="uk-text-small">
                                    20 | 30 | 50
                                </span>
                            </div>
                            <div>
                                <span data-uk-icon="icon: more; ratio: 1.4"></span>
                                <h5
                                    className="
                                        uk-text-500
                                        uk-margin-small-top
                                        uk-margin-remove-bottom
                                    "
                                >
                                    Loops
                                </h5>
                                <span className="uk-text-small">
                                    20 | 30 | 50
                                </span>
                            </div>
                            <div>
                                <span data-uk-icon="icon: settings; ratio: 1.4"></span>
                                <h5
                                    className="
                                        uk-text-500
                                        uk-margin-small-top
                                        uk-margin-remove-bottom
                                    "
                                >
                                    Stems
                                </h5>
                                <span className="uk-text-small">
                                    20 | 30 | 50
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
                                    Created by <a href="#">Meteors</a>
                                </p>
                                <span className="uk-text-muted">
                                    Length 2:23{" "}
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
                                    href="#"
                                    className="uk-icon-link"
                                    data-uk-icon="icon: download; ratio: 1.2"
                                    data-uk-tooltip="title: Download Track"
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
