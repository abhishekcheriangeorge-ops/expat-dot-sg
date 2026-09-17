import remarkGfm from "remark-gfm";

/** Shared MDX compile options — GFM tables/strikethrough/autolinks everywhere. */
export const mdxCompileOptions = {
  parseFrontmatter: false,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};
