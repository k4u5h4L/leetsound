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
                <meta name="author" content="meteors" />
                <meta
                    name="description"
                    content="MUSICO - Premium Music Download Site Html Template"
                />
                <meta
                    name="keywords"
                    content="creative, works, showcase, portfolio, highlight, music, parallax, digital, studio, css, animation, transition, svg, html, css"
                />
                <meta
                    property="og:description"
                    content="MUSICO - Premium Music Download Site Html Template"
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@MUSICO" />
                <meta name="twitter:creator" content="@MUSICO" />
                <meta name="twitter:title" content="MUSICO" />
                <meta name="twitter:description" content="MUSICO " />
            </Head>
            <NextNprogress
                color="#ffffff"
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
