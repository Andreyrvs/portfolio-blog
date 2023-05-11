import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Layout from "@/components/layout/Layout";

export default function Curriculo() {
  return (
    <Layout>
      <h1>Curriculo</h1>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl="/Curriculo-FullStack.pdf" />
        </div>
      </Worker>
    </Layout>
  );
}
