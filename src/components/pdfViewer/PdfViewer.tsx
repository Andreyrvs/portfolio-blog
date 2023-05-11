import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import styles from "./PdfViewer.module.css";
import {
  fullScreenPlugin,
  ExitFullScreenIcon,
  FullScreenIcon,
} from "@react-pdf-viewer/full-screen";
import { SpecialZoomLevel } from "@react-pdf-viewer/core";

type Zoom = (scale: number | SpecialZoomLevel) => void;

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreenButton } = fullScreenPluginInstance;
  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
      <div className={`rpv-core__viewer ${styles.card}`}>
        <div className={styles.cardHeader}>
          <EnterFullScreenButton />
        </div>
        <div className={styles.cardBody}>
          <Viewer plugins={[fullScreenPluginInstance]} fileUrl={fileUrl} />
        </div>
      </div>
    </Worker>
  );
};

export default PdfViewer;
