import React, { ReactElement } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import {
  toolbarPlugin,
  ToolbarSlot,
  ToolbarProps,
} from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import style from "./pdfViewer.module.css";

interface ToolbarSlotsExampleProps {
  fileUrl: string;
}

const PdfViewer: React.FC<ToolbarSlotsExampleProps> = ({ fileUrl }) => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const {
          CurrentPageInput,
          Download,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <>
            <section className={style.container}>
              <div className={style.spaceItens}>
                <ShowSearchPopover />
              </div>
              <div className={style.spaceItens}>
                <ZoomOut />
              </div>
              <div className={style.spaceItens}>
                <Zoom />
              </div>
              <div className={style.spaceItens}>
                <ZoomIn />
              </div>
            </section>

            <section className={style.container}>
              <div>
                <GoToPreviousPage />
              </div>
              <div className={style.currentPageInput}>
                <CurrentPageInput />
              </div>
              <div className={style.spaceItens}>
                / <NumberOfPages />
              </div>
              <div className={style.spaceItens}>
                <GoToNextPage />
              </div>
            </section>

            <section className={style.container}>
              <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                <EnterFullScreen />
              </div>
              <div className={style.spaceItens}>
                <Download />
              </div>
              <div className={style.spaceItens}>
                <Print />
              </div>
            </section>
          </>
        );
      }}
    </Toolbar>
  );

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
      <div className={style.card}>
        <div className={style.cardHeader}>{renderToolbar(Toolbar)}</div>
        <div className={style.cardBody}>
          <Viewer fileUrl={fileUrl} plugins={[toolbarPluginInstance]} />
        </div>
      </div>
    </Worker>
  );
};

export default PdfViewer;
