import Layout from "@/components/layout/Layout";
import PdfViewer from "@/components/pdfViewer/PdfViewer";
// import PdfViewerDefault from "@/components/pdfViewer/PdfViewerDefault";
import ToolbarSlotsExample from "@/components/pdfViewer/PdfViewerTool";

export default function Curriculo() {
  return (
    <Layout>
      <h1>Curriculo</h1>
      {/* <PdfViewer fileUrl="/Curriculo-FullStack.pdf" /> */}
      {/* <PdfViewerDefault fileUrl="/Curriculo-FullStack.pdf" /> */}
      <ToolbarSlotsExample fileUrl="/Curriculo-FullStack.pdf" />
    </Layout>
  );
}
