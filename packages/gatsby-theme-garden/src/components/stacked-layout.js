import React, {Fragment,  memo } from "react";
import { Helmet } from "react-helmet"
import { useWindowWidth } from "@react-hook/window-size";
import {
  useStackedPagesProvider,
  StackedPagesProvider,
} from "react-stacked-pages-hook";
import { dataToNote, dataToSlug } from "../utils/data-to-note";
import Note from "./note";
import NoteWrapper from "./note-wrapper";
import Header from "./header";
import SEO from "./seo";

import "./theme.css";
import "./stacked-layout.css";
import "./custom.css";

const Content = ({ windowWidth, scrollContainer, stackedPages, index }) => {
  return (
    <Fragment>
      <Helmet>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous" />
      </Helmet>
    <div className="layout">
      <SEO title={stackedPages[stackedPages.length - 1].data.title} />
      <Header />
      <div className="note-columns-scrolling-container" ref={scrollContainer}>
        <div
          className="note-columns-container"
          style={{ width: 625 * (stackedPages.length + 1) }}
        >
          {stackedPages.map((page, i) => (
            <NoteWrapper
              key={page.slug}
              i={typeof index !== "undefined" ? index : i}
              slug={page.slug}
              title={page.data.title}
            >
              <Note {...page.data} />
            </NoteWrapper>
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
};
const MemoContent = memo(Content);

const NotesLayout = ({ location, slug, data }) => {
  const isBrowser = typeof window !== "undefined"
  const windowWidth = isBrowser ? useWindowWidth() : 801;

  const [state, scrollContainer] = useStackedPagesProvider({
    firstPage: { slug: dataToSlug(data), data },
    location,
    processPageQuery: dataToNote,
    pageWidth: 625,
  });

  let pages = state.stackedPages;
  let activeIndex;
  if (windowWidth <= 800) {
    const activeSlug = Object.keys(state.stackedPageStates).find(
      (slug) => state.stackedPageStates[slug].active
    );
    activeIndex = state.stackedPages.findIndex(
      (page) => page.slug === activeSlug
    );
    if (activeIndex === -1) {
      activeIndex = state.stackedPages.length - 1;
    }

    pages = [state.stackedPages[activeIndex]];
  }

  return (
    <StackedPagesProvider value={state}>
      <MemoContent
        windowWidth={windowWidth}
        scrollContainer={scrollContainer}
        stackedPages={pages}
        index={activeIndex}
      />
    </StackedPagesProvider>
  );
};

export default NotesLayout;
