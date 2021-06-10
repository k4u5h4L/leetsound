import React, { useState } from "react";

import Router from "next/router";

import dynamic from "next/dynamic";
import Head from "next/head";
import { Provider } from "next-auth/client";
import type { AppProps /*, AppContext */ } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/graphql/apolloClient";

const Player = dynamic(() => import("@/components/Player/Player"), {
    ssr: false,
});

import { paths } from "@/constants/pathsToInclude";

import NextNprogress from "nextjs-progressbar";

// import "react-h5-audio-player/lib/styles.css";
import "react-jinke-music-player/assets/index.css";

import { QueueContext } from "@/utils/queueContext";

function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo();

    if (typeof window !== "undefined") {
        console.log(Router.route);
    }

    const [queue, setQueue] = useState<any[]>([
        {
            musicSrc: "/api/song/1",
            name: "Conquer",
            singer: "Magnus",
            cover: "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/4c/c4/9c/4cc49cca-8197-16a9-1268-8273d35304c4/20UMGIM07401.rgb.jpg/400x400bb.jpeg",
        },
    ]);

    return (
        <Provider session={pageProps.session}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="format-detection" content="telephone=no" />
                <meta name="theme-color" content="#33a16e" />
                <title>leetsound</title>
                <meta name="author" content="kaushal" />
                <meta
                    name="description"
                    content="lossless music streaming site"
                />
                <meta
                    name="keywords"
                    content="music, streaming, sound, audio, css, animation, transition, svg, html, css"
                />
                <meta
                    property="og:description"
                    content="lossless music streaming site"
                />
                <meta
                    name="twitter:card"
                    content="lossless music streaming site"
                />
                <meta name="twitter:site" content="@leetsound" />
                <meta name="twitter:creator" content="@leetsound" />
                <meta name="twitter:title" content="leetsound" />
                <meta
                    name="twitter:description"
                    content="lossless music streaming site "
                />
            </Head>
            <NextNprogress
                color="#000000"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <ApolloProvider client={client}>
                <QueueContext.Provider value={{ queue, setQueue }}>
                    <Component {...pageProps} />
                    <Player />
                </QueueContext.Provider>
            </ApolloProvider>
        </Provider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
