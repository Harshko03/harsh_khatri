import { useState } from "react";
import { Document, Page, pdfjs as PDFJS } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Scrambled from "./Scramble";

// ✅ Worker for Vercel & Vite builds
PDFJS.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
PDFJS.GlobalWorkerOptions.verbosity = PDFJS.VerbosityLevel.errors;

export default function RetroResume() {
  const [showResume, setShowResume] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <span>
      <span className="bg-gray-900">
        <a onClick={() => setShowResume(true)} className="cursor-pointer">
          <Scrambled text="Harsh Khatri" />
        </a>
      </span>

      {showResume && (
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     bg-gray-200 border-4 border-gray-700 shadow-lg
                     w-[500px] h-[400px] flex flex-col z-50"
        >
          <div className="bg-gray-800 text-white flex justify-between items-center p-2">
            <span>📄 My Resume</span>
            <button
              onClick={() => setShowResume(false)}
              className="bg-red-600 hover:bg-red-700 text-white w-6 h-6 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          <div className="bg-white flex-1 overflow-auto p-2 text-black">
            <Document
              file="/reshk.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(err) => console.error("❌ PDF error:", err)}
            >
              {Array.from(new Array(numPages), (_, i) => (
                <Page
                  key={i}
                  pageNumber={i + 1}
                  width={460}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </span>
  );
}
