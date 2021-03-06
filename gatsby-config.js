module.exports = {
  siteMetadata: {
    title: `WZBC Archive Streaming`,
    description: `A fan made site for listening to the WZBC archive streams.`,
    author: `@fidalgok`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wzbc-archive-player`,
        short_name: `wzbc-archives`,
        start_url: `/`,
        background_color: `#ff5252`,
        theme_color: `#ff5252`,
        display: `minimal-ui`,
        icon: `src/images/app-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
