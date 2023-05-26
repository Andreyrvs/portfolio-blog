import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { resume, summary } from "@/utils/text";
import Header from "@/components/header/Header";
import utilStyles from "@/styles/utils.module.css";

const siteTitle = "Andrey's Portfolio";
const siteDescription = "Portfolio home page";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="title" content={siteTitle} />
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
