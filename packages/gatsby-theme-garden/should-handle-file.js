module.exports = function shouldHandleFile(node, options = {}) {
  return (
    ((options.extensions || [".md", ".mdx"]).includes(node.ext) ||
      (options.mediaTypes || ["text/markdown", "text/x-markdown", "text/mdx"]).includes(
        node.internal.mediaType
      )) &&
    node.sourceInstanceName === options.contentPath
  );
};
