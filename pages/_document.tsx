import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href="/images/favicon/favicon-16x16.png"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&amp;display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Righteous&amp;display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="/js/uikit.js"></script>
                </body>
            </Html>
        );
    }
}
