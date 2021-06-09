import React from "react";

export default function Banner() {
    return (
        <div className="uk-container uk-container-large">
            <div
                className="
                    uk-border-rounded-large
                    uk-background-top-center
                    uk-background-cover
                    uk-background-norepeat
                    uk-light
                    uk-inline
                    uk-overflow-hidden
                    uk-width-1-1
                "
            >
                <div className="video-home">
                    <video
                        src="video/video.mp4"
                        loop
                        muted
                        playsInline
                        uk-video="autoplay: inview"
                    ></video>
                </div>
                <div className="uk-position-cover uk-header-overlay"></div>
                <div
                    className="uk-position-relative uk-animation-toggle"
                    tabIndex={0}
                    data-uk-grid
                >
                    <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                        <div className="uk-padding-large uk-padding-remove-right">
                            <h1
                                className="
                                    uk-heading-xlarge
                                    uk-margin-remove-top
                                    uk-animation-slide-left-small
                                "
                            >
                                Extraordinary music.
                            </h1>
                            <p className="uk-text-secondary">
                                Get the best royalty-free music tracks,
                                handpicked by industry experts.
                            </p>
                            <a
                                className="uk-button uk-button-secondary"
                                href="sign-up.html"
                            >
                                Exclusive <span uk-icon="triangle-right"></span>
                            </a>
                        </div>
                    </div>
                    <div className="uk-width-expand@m"></div>
                </div>
            </div>
        </div>
    );
}
