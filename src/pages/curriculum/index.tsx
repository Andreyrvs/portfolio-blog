import Layout from "@/components/layout/Layout";
import PdfViewer from "@/components/pdfViewer/PdfViewer";
import Head from "next/head";
const siteTitle = "Andrey's Curriculum";

export default function Curriculo() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <h1>Currículo 📄</h1>
      <PdfViewer fileUrl="/Curriculo-FullStack.pdf" />
    </Layout>
  );
}
