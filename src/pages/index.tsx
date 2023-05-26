import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { resume, summary } from "@/utils/text";
import Header from "@/components/header/Header";

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
      <section>
        <p>{summary}.</p>
        <p>{resume}</p>
      </section>
    </Layout>
  );
}
