import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
      <div
      // className={`rpv-core__viewer ${styles.card}`}
      >
        <div
        // className={styles.cardHeader}
        >
          {/* <EnterFullScreenButton /> */}
        </div>
        <div
          style={{
            height: "100%",
          }}
        >
          <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={fileUrl} />
        </div>
      </div>
    </Worker>
  );
};

export default PdfViewer;
