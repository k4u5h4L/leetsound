const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//         runtimeCaching,
//     },
//     images: {
//         domains: [
//             "localhost:3000",
//             "localhost",
//             "quikpantry.vercel.app",
//             "vercel.com",
//             // below are arbitrary links for random images
//             "templates.envytheme.com",
//             "i1.wp.com",
//             "images-na.ssl-images-amazon.com",
//             "cdn-prod.medicalnewstoday.com",
//             "images2.minutemediacdn.com",
//             "cdn.apartmenttherapy.info",
//             "res.cloudinary.com",
//             "thespruceeats.com",
//             "www.thespruceeats.com",
//             "images.ctfassets.net",
//         ],
//     },
//     async redirects() {
//         return [
//             {
//                 source: "/shop",
//                 destination: "/shop/1",
//                 permanent: true,
//             },
//         ];
//     },
// });

module.exports = {
    images: {
        domains: [
            "localhost:3000",
            "localhost",
            "chatterz.vercel.app",
            "vercel.com",
            // below are arbitrary links for random images
            "res.couldinary.com",
            "img.icons8.com",
        ],
    },
    // async redirects() {
    //     return [
    //         {
    //             source: "/shop",
    //             destination: "/shop/1",
    //             permanent: true,
    //         },
    //     ];
    // },
};
