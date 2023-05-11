import Layout from "@/components/layout/Layout";
import FullScreenButtonExample from "@/components/pdfViewer/PdfViewer";

export default function Curriculo() {
  return (
    <Layout>
      <h1>Curriculo</h1>
      <FullScreenButtonExample fileUrl="/Curriculo-FullStack.pdf" />
    </Layout>
  );
}
