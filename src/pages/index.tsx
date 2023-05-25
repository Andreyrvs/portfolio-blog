import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout/Layout";
import { resume, summary } from "@/utils/text";
import Header from "@/components/header/Header";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/svg" href="/blog.ico" />
        <meta name="description" content="Andrey's portfolio home page" />
      </Head>
      <Header />
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.about}>Sobre</h1>
        <p className={utilStyles.paragraph}>{summary}.</p>
        <p className={`${utilStyles.indent} ${utilStyles.paragraph}`}>
          {resume}
        </p>
      </section>
    </Layout>
  );
}
