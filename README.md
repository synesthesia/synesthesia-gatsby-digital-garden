# Gatsby And Digital Garden

A set of packages to create a digital garden with Gatsby.

Forked from [mathieudutour/gatsby-digital-garden](https://github.com/mathieudutour/gatsby-digital-garden).

Please note this fork is for personal experimentation, use at your own risk and please do not have any expectation of support. I strongly recommend you prefer [Mathieu's original](https://github.com/mathieudutour/gatsby-digital-garden).

- [gatsby-remark-double-brackets-link](./packages/gatsby-remark-double-brackets-link): Transform `[[page]]` into a proper link.
- [react-stacked-pages-hook](./packages/react-stacked-pages-hook): Manage a stack of pages in Gatsby.
- [gatsby-transformer-markdown-references](./packages/gatsby-transformer-markdown-references): Extract references between markdown nodes.
- [@synesthesia/gatsby-theme-garden](./packages/gatsby-theme-garden): A Gatsby theme bundling all of the above packages.

An example site for leveraging all of them is at [https://mathieudutour.github.io/gatsby-digital-garden/](https://mathieudutour.github.io/gatsby-digital-garden/).

## 🚀 Quick start

Quickly get started using the Gatsby garden theme! This starter creates a new Gatsby site that is preconfigured to work with the [Gatsby garden theme](https://www.npmjs.com/package/gatsby-theme-garden).

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the garden theme starter.

    ```shell
    # create a new Gatsby site using the garden theme starter
    gatsby new my-digital-garden https://github.com/mathieudutour/gatsby-starter-digital-garden
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-digital-garden/
    gatsby develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000`!

    To get started, check out the guide to [using a Gatsby theme](https://gatsbyjs.org/docs/themes/using-a-gatsby-theme), or the longer, [more detailed tutorial](https://gatsbyjs.org/tutorial/using-a-theme).
