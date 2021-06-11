import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/client";
import { useLazyQuery, gql } from "@apollo/client";

import Navbar from "@/components/Navbar/Navbar";
import Songs from "@/components/Songs/Songs";
import Ads from "@/components/Home/Ads/Ads";
import Footer from "@/components/Footer/Footer";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

// import prisma from "@/prisma/client";

const Player = dynamic(() => import("@/components/Player/Player"), {
    ssr: false,
});

// export const getServerSideProps: GetServerSideProps = async (
//     context: GetServerSidePropsContext
// ) => {
//     try {
//         const query: string = `${context.query.q}`;

//         const res = await prisma.song.findMany({
//             where: {
//                 OR: [
//                     {
//                         name: {
//                             contains: query,
//                         },
//                     },
//                     {
//                         album: {
//                             name: {
//                                 contains: query,
//                             },
//                         },
//                     },
//                     {
//                         artist: {
//                             name: {
//                                 contains: query,
//                             },
//                         },
//                     },
//                     {
//                         genres: {
//                             some: {
//                                 name: {
//                                     contains: query,
//                                 },
//                             },
//                         },
//                     },
//                 ],
//             },
//             include: {
//                 artist: true,
//                 genres: true,
//                 album: true,
//             },
//         });

//         const songs = res.map((song) => ({
//             ...song,
//             date: song.date.toDateString(),
//         }));

//         return {
//             props: {
//                 songs,
//             }, // will be passed to the page component as props
//         };
//     } catch (err) {
//         console.error(err);

//         const songs = [];

//         return {
//             props: {
//                 songs,
//             }, // will be passed to the page component as props
//         };
//     }
// };

const SEARCH_SONGS = gql`
    query SearchSongs($query: String!) {
        songs(
            where: {
                OR: [
                    { name: { contains: $query } }
                    { album: { name: { contains: $query } } }
                    { artist: { name: { contains: $query } } }
                    { genres: { some: { name: { contains: $query } } } }
                ]
            }
        ) {
            id
            name
            cover
            length
            artist {
                name
            }
            album {
                name
            }
            genres {
                name
            }
        }
    }
`;

export default function Search({}) {
    const [session] = useSession();
    const [songs, setSongs] = useState([]);
    const router = useRouter();
    const [getSongs, { loading, error, data }] = useLazyQuery(SEARCH_SONGS);

    useEffect(() => {
        if (router.isReady) {
            getSongs({ variables: { query: router.query.q } });
        }
    }, [router.query.counter]);

    useEffect(() => {
        if (data) {
            setSongs(data.songs);
            console.log(data);
        }
    }, [data]);

    return (
        <>
            <Navbar />
            {data ? <Songs songs={songs} /> : null}
            {!session ? <Ads /> : null}
            <Footer />
            <BottomLinks />

            {/* <Player /> */}
        </>
    );
}
