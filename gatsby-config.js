require("dotenv").config({
  path: `content/settings/.env`, // Aangepaste locatie voor de .env
});

module.exports = {
  siteMetadata: {
    title: `Catalogue Raisonné`,
    description: `The most powerful tool for creating and managing catalogues raisonnés.`,
    author: `@crstudio`,
    siteUrl: `https://crstudio.online/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/config/algolia-queries"),
        chunkSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/static/*": ["Cache-Control: public, max-age=31536000, immutable"], // Cache statische bestanden
        },
        allPageHeaders: ["X-Frame-Options: SAMEORIGIN", "X-Content-Type-Options: nosniff"],
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // Genereert naam en icoontje in de browser
      options: {
        name: `Catalogue Raisonné`,
        short_name: `CR`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    `gatsby-transformer-json`,
    // Gecombineerde configuratie voor gatsby-source-filesystem
    ...[
      { name: "datart", path: `${__dirname}/content/datart` },
      { name: "datbio", path: `${__dirname}/content/datbio` },
      { name: "datcol", path: `${__dirname}/content/datcol` },
      { name: "datexh", path: `${__dirname}/content/datexh` },
      { name: "datlit", path: `${__dirname}/content/datlit` },
      { name: "images", path: `${__dirname}/content/images` },
      { name: "imaart", path: `${__dirname}/content/imaart` },
      { name: "imabio", path: `${__dirname}/content/imabio` },
      { name: "imacol", path: `${__dirname}/content/imacol` },
      { name: "imaexh", path: `${__dirname}/content/imaexh` },
      { name: "imalit", path: `${__dirname}/content/imalit` },
    ].map(({ name, path }) => ({
      resolve: `gatsby-source-filesystem`,
      options: { name, path },
    })),
  ],
};
