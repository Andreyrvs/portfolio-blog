import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout/Layout";
import utilStyles from "../styles/utils.module.css";
import { presentation1, presentation2 } from "@/utils/text";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/svg" href="/blog-svgrepo-com.svg" />
        <meta name="description" content="Andrey's blog home page, " />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {presentation1} {presentation2}
        </p>
      </section>
    </Layout>
  );
}
