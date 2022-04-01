export const Meta = (frontmatter) => {
    return (
        <div className="postmeta">
            <span>{frontmatter.effort}</span>
        </div>
    );
};