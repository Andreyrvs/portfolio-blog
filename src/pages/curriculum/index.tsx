import Layout from "@/components/layout/Layout";
import PdfViewer from "@/components/pdfViewer/PdfViewer";

export default function Curriculo() {
  return (
    <Layout>
      <h1>Currículo 📄</h1>
      <PdfViewer fileUrl="/Curriculo-FullStack.pdf" />
    </Layout>
  );
}
