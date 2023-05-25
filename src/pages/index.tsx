import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { resume, summary } from "@/utils/text";
import Header from "@/components/header/Header";
import utilStyles from "@/styles/utils.module.css";

export const siteTitle = "Andrey's Portfolio";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/svg" href="/blog.ico" />
        <meta name="og:description" content="Andrey's portfolio home page" />
        <meta name="og:title" content={siteTitle} />
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
