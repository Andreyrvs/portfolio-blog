export type Props = {
  frontMatter: {
    date: string
    description: string
    tags: Array<string>
    thumbnailUrl: string
    title: string
  }
  mdxSource: {
    compiledSource: string
    frontmatter: object
    scope: object
  }
  slug: string
}
