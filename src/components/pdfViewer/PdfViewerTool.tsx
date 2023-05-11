import React, { ReactElement } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import {
  defaultLayoutPlugin,
  ToolbarProps,
  ToolbarSlot,
} from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PdfViewerProps {
  fileUrl: string;
}

const ToolbarSlotsExample: React.FC<PdfViewerProps> = ({ fileUrl }) => {
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
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0px 2px",
            }}
          >
            <section
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ padding: "0px 2px" }}>
                <ShowSearchPopover />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <ZoomOut />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Zoom />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <ZoomIn />
              </div>
            </section>
            {/* <section className="REMOVER">
              <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                <GoToPreviousPage />
              </div>
              <div style={{ padding: "0px 2px", width: "4rem" }}>
                <CurrentPageInput />
              </div>
              <div style={{ padding: "0px 2px" }}>
                / <NumberOfPages />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <GoToNextPage />
              </div>
            </section> 
            */}

            <section
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  padding: "0px 2px",
                }}
              >
                <EnterFullScreen />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Download />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Print />
              </div>
            </section>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
      <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
  );
};

export default ToolbarSlotsExample;
