import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Date from "@/components/Date";
import utilStyles from "@/styles/utils.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Props from "@/types/Props";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import Code from "@/components/Code";
const components = { Code, SyntaxHighlighter };

const WHITE_SPACE = " ";

export default function Post(props: Props): JSX.Element {
  const {
    frontMatter: { title, tags, date },
    mdxSource,
  } = props;

  const listTags = tags.map((tag) => (
    <small key={tag}>{tag + WHITE_SPACE}</small>
  ));

  return (
    <Layout blog>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Page with the list of all posts, all content is dynamically generated through MDX."
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div>{listTags}</div>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <MDXRemote {...mdxSource} components={components}></MDXRemote>
      </article>
    </Layout>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

type staticProps = {
  params: {
    id: string;
  };
};

const getStaticProps = async (props: staticProps) => {
  const {
    params: { id },
  } = props;
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "posts", id + ".mdx")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      id,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
