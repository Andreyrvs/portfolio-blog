import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from '@/lib/posts'
import Date from "@/components/date";
import text from "@/utils/text";
import Props from "@/types/Props";

const POST_ROUTE = "/blog/";

export default function Home({ posts }: { posts: Props[] }) {
  const listItems = posts.map(
    ({ id, frontMatter: { description, tags, date, title } }, index) => (
      <li className="{}" key={index}>
        <Link href={POST_ROUTE + id} passHref>
          <h2>{title}</h2>
          <br />
          <small>{description}</small>
          <br />
          <small>
            Tags:
            {tags.map((item: string) => (
              <b key={item}>{` ${item}, `}</b>
            ))}
          </small>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </Link>
      </li>
    )
  );

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {text.presentation1} {text.presentation2}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>{listItems}</ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));
  const posts = files.map((filename) => {
    const mardownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename)
    );
    const { data: frontMatter } = matter(mardownWithMeta);

    return {
      frontMatter,
      id: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
