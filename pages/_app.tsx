import React from "react";

import Head from "next/head";
import { Provider } from "next-auth/client";
import type { AppProps /*, AppContext */ } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/graphql/apolloClient";

import NextNprogress from "nextjs-progressbar";

// import "react-h5-audio-player/lib/styles.css";
import "react-jinke-music-player/assets/index.css";

function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo();

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
                <Component {...pageProps} />
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
