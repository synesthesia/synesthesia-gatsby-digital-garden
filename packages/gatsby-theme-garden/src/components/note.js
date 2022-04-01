import React from "react";
import { MDXProvider } from "@mdx-js/react";
import * as components from "./mdx-components";
import MDXRenderer from "./mdx-components/mdx-renderer";
import ReferencesBlock from "./references-block";
import { LinkToStacked } from "react-stacked-pages-hook";

const Note = (data) => {

  const AnchorTag = (props) => (
    <components.a {...props} references={data.outboundReferences} />
  );

  const Meta = (props) => {
    <components.m frontmatter={data.frontmatter} {...props} />
  }

  return (
    <React.Fragment>
      {data.partOf ? (
        <div>
          Part of{" "}
          <LinkToStacked to={data.partOf.slug}>
            {data.partOf.title}
          </LinkToStacked>
        </div>
      ) : null}
      <MDXProvider components={{ ...components, a:AnchorTag, m:Meta }}>
        <MDXRenderer>{data.mdx}</MDXRenderer>
      </MDXProvider>
      <ReferencesBlock references={data.inboundReferences} />
    </React.Fragment>
  );
};

export default Note;
