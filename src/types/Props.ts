type Props = {
  frontMatter: {
    date: string;
    description?: string;
    tags: Array<string>;
    thumbnailUrl: string;
    title: string;
    id: string;
  };
  mdxSource: {
    compiledSource: string;
    frontmatter: object;
    scope: object;
  };
};

export default Props;
