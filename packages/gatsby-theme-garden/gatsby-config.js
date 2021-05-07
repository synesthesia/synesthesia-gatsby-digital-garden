const searchIndexes = require("./search-indexes");

module.exports = (options) => {
  const {
    mdxOtherwiseConfigured = false,
    contentPath,
    ignore,
  } = options;

  return {
    siteMetadata: {
      title: `Digital Garden Title Placeholder`,
      description: `Description placeholder`,
      siteUrl: `http://example.com/`,
    },
    plugins: [
      !mdxOtherwiseConfigured && `gatsby-plugin-sharp`,
      !mdxOtherwiseConfigured && `gatsby-remark-images`,
      ////`gatsby-remark-katex`,
      !mdxOtherwiseConfigured && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          gatsbyRemarkPlugins: [
            "gatsby-remark-double-brackets-link",
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 561,
              },
            },
            `gatsby-remark-copy-linked-files`,
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                icon: false,
              },
            },
          ],
          remarkPlugins: [
            require('remark-math'),
          ],
          rehypePlugins: [
            require('rehype-katex'),
          ],
        },
      },
      `gatsby-plugin-mdx-embed`,
      contentPath && {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
          name: contentPath,
          ignore: ignore,
        },
      },
      `gatsby-transformer-markdown-references`,
      ...searchIndexes(options),
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [`@synesthesia/gatsby-theme-garden`],
        },
      },
    ].filter(Boolean),
  };
};
