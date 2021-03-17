const path = require("path");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  pathPrefix: `/synesthesia-gatsby-digital-garden`,
  siteMetadata: {
    title: `Digital Garden`,
    description: `Example of using Roam Research as a data source for a Gatsby site`,
  },
  plugins: [
    {
      resolve: `@synesthesia/gatsby-theme-garden`,
      options: {
        rootNote: "/markdown",
        contentPath: `${__dirname}/notes`,
      },
    },
  ],
};
