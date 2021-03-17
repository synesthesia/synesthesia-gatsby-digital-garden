# @synesthesia/gatsby-theme-garden

A Gatsby theme for publishing a digital garden forked from [mathieudutour/gatsby-digital-garden](https://github.com/mathieudutour/gatsby-digital-garden).

Please note this fork is for personal experimentation, use at your own risk and please do not have any expectation of support.

## Installation

### Manually add to your site

1. Install the theme

   ```shell
   npm install @synesthesia/gatsby-theme-garden
   ```

2. Add the configuration to your `gatsby-config.js` file

   ```js
   // gatsby-config.js
   module.exports = {
     plugins: [
       {
         resolve: `@synesthesia/gatsby-theme-garden`,
         options: {
           // basePath defaults to `/`
           basePath: `/garden`,
           rootNote: `/garden/About-these-notes`,
           contentPath: `/content/garden`,
         },
       },
     ],
   };
   ```

3. Add notes to your site by creating `md` or `mdx` files inside `/content/garden`.

4. Run your site using `gatsby develop` and navigate to your notes. If you used the above configuration, your URL will be `http://localhost:8000/garden`

### Options

| Key                      | Default value | Description                                                                      |
| ------------------------ | ------------- | -------------------------------------------------------------------------------- |
| `basePath`               | `/`           | Root url for the garden                                                          |
| `rootNote`               |               | The URL of the note to use as the root                                           |
| `contentPath`            |               | Location of local content                                                        |
| `mdxOtherwiseConfigured` | `false`       | Set this flag `true` if `gatsby-plugin-mdx` is already configured for your site. |

### How to inject custom MDX Components?

1. Create a custom react component.

2. [Shadow](https://www.gatsbyjs.org/docs/themes/shadowing/) the component with the custom component created in step 1.

3. All the MDX components that are used within `gatsby-theme-garden` can be shadowed by placing the custom components under the following path `./src/gatsby-theme-garden/components/mdx-components/index.js`

#### Example: Injecting a custom `CodeBlock` component to support Syntax Highlighting

1. Create a custom `CodeBlock` component as mentioned in the [MDX Guides](https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component)

2. Create a file named `./src/gatsby-theme-garden/components/mdx-components/index.js` with the following content.

   ```js
   // the components provided by the theme
   export { AnchorTag as a } from "gatsby-theme-garden/src/components/mdx-components/anchor-tag";

   // your own component to inject into mdx
   export code from "./your-component"; // any code block will use this component
   ```
