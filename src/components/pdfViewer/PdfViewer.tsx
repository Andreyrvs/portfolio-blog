import { Viewer, Worker } from "@react-pdf-viewer/core";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import styles from "./PdfViewer.module.css";

interface FullScreenButtonExampleProps {
  fileUrl: string;
}
const FullScreenButtonExample: React.FC<FullScreenButtonExampleProps> = ({
  fileUrl,
}) => {
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

export default FullScreenButtonExample;
