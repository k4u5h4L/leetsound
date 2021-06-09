import React from "react";

export default function Ads() {
    return (
        <div className="uk-container uk-container-large">
            <div
                className="
                    uk-background-cover
                    uk-border-rounded-large
                    uk-light
                    uk-background-blend-overlay
                    uk-background-primary
                "
                style={{ backgroundImage: `url('images/footer.jpg')` }}
            >
                <div className="uk-width-1-1@m uk-margin-auto uk-padding-large">
                    <h2 className="uk-h2 uk-margin-remove">
                        Get all the music you need for free
                    </h2>
                    <ul className="uk-list uk-list-bullet">
                        <li>Exclusive music library</li>
                        <li>Safe for Youtube and podcasts</li>
                        <li>Unbeatable price</li>
                    </ul>
                    <a
                        className="uk-button uk-button-secondary"
                        href="sign-up.html"
                    >
                        Sign up <span uk-icon="sign-in"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}
