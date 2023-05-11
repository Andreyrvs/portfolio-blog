import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "@/components/layout/Layout";
import utilStyles from "@/styles/utils.module.css";
import Date from "@/components/date";
import Props from "@/types/Props";

const POST_ROUTE = "/blog/";

export default function Home({ sortedPosts }: { sortedPosts: Props[] }) {
  const listItems = sortedPosts.map(
    ({ frontMatter: { description, tags, date, id, title } }, index) => (
      <li className={utilStyles.listItem} key={index}>
        <Link href={POST_ROUTE + id} passHref>
          {title}
        </Link>
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
      </li>
    )
  );

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/svg" href="/blog-svgrepo-com.svg" />
        <meta name="description" content="Andrey's blog home page, " />
      </Head>
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
    frontMatter.id = filename.split(".")[0];

    return {
      frontMatter,
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: {
      sortedPosts,
    },
  };
};
