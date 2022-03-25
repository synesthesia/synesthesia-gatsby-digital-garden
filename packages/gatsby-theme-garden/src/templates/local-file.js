import { graphql } from "gatsby";

import StackedLayout from "../components/stacked-layout";

export default StackedLayout;

export const pageQuery = graphql`
  query($id: String!) {
    file(id: { eq: $id }) {
      childMdx {
        frontmatter {
          status
          confidence
          effort
        }
        body
        ...GatsbyGardenReferences
      }
      fields {
        slug
        title
        
      }
    }
  }
`;
