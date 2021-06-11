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
    // webpack: (config, options) => {
    //     config.module.rules.push({
    //         test: /\.css$/,
    //         use: [
    //             {
    //                 loader: require.resolve("style-loader"),
    //             },
    //             {
    //                 loader: require.resolve("css-loader"),
    //                 options: {
    //                     modules: true,
    //                     importLoaders: 1,
    //                     localIdentName: "[sha1:hash:hex:4]",
    //                 },
    //                 // options: {
    //                 //     importLoaders: 1,
    //                 //     modules: true,
    //                 //     modules: {
    //                 //         localIdentName: "[name]__[local]__[hash:base64:5]",
    //                 //     },
    //                 // },
    //             },
    //         ],
    //     });

    //     return config;
    // },

    // webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    //     config.module.rules[1].oneOf.forEach((moduleLoader, i) => {
    //         Array.isArray(moduleLoader.use) &&
    //             moduleLoader.use.forEach((l) => {
    //                 if (
    //                     l.loader.includes("\\css-loader") &&
    //                     !l.loader.includes("postcss-loader")
    //                 ) {
    //                     const { getLocalIdent, ...others } = l.options.modules;

    //                     l.options = {
    //                         ...l.options,
    //                         modules: {
    //                             ...others,
    //                             localIdentName: "[hash:base64:6]",
    //                         },
    //                     };
    //                 }
    //             });
    //     });
    //     return config;
    // },

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
