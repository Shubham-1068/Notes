import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Link } from "react-router-dom";
import downloadIcon from "./Resources/downloadIcon.svg";
import phy1 from "./Data/try.pdf";
import phy2 from "./Data/try2.pdf";
import ComptonEffect from './Data/SASH/comptonEffect.pdf'
import QuantumParticle from './Data/SASH/QuantumParticle.pdf'
import SchrodingerEquation from './Data/SASH/SchrodingerEquation.pdf'
import StatMech from './Data/SASH/StatMech.pdf'

function Pdf() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  let doc = localStorage.getItem("doc");

  return (
    <>
      <div className="relative mt-12 md:mt-24 w-screen flex justify-center">
        <div className="h-screen w-[95%] md:w-[90%] md:p-9 pt-0 border-2 border-slate-600 overflow-scroll flex flex-col rounded-md scroll-smooth md:items-center">
          {doc == "ComptonEffect" ? (
            <>
              <div className="absolute top-[-50px] z-10 right-6 md:right-[50px] bg-[#7dd821] h-9 w-32 flex justify-around items-center rounded-lg font-semibold hover:bg-[#77ee00]">
                <a href={ComptonEffect} download="ComptonEffect">
                  Download
                </a>
                <img src={downloadIcon} alt="download" className="h-5" />
              </div>{" "}
              <Document file={ComptonEffect} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => {
                    return (
                      <Page
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    );
                  })}
              </Document>
            </>
          ) : (
            ""
          )}

          {doc == "QuantumParticle" ? (
            <>
              <div className="absolute top-[-50px] z-10 right-[50px] bg-[#7dd821] h-9 w-32 flex justify-around items-center rounded-lg font-semibold hover:bg-[#77ee00]">
                <a href={QuantumParticle} download="QuantumParticle">
                  Download
                </a>
                <img src={downloadIcon} alt="download" className="h-5" />
              </div>{" "}
              <Document file={QuantumParticle} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => {
                    return (
                      <Page
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    );
                  })}
              </Document>
            </>
          ) : (
            ""
          )}

{doc == "SchrodingerEquation" ? (
            <>
              <div className="absolute top-[-50px] z-10 right-6 md:right-[50px] bg-[#7dd821] h-9 w-32 flex justify-around items-center rounded-lg font-semibold hover:bg-[#77ee00]">
                <a href={SchrodingerEquation} download="SchrodingerEquation">
                  Download
                </a>
                <img src={downloadIcon} alt="download" className="h-5" />
              </div>{" "}
              <Document file={SchrodingerEquation} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => {
                    return (
                      <Page
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    );
                  })}
              </Document>
            </>
          ) : (
            ""
          )}

{doc == "StatMech" ? (
            <>
              <div className="absolute top-[-50px] z-10 right-6 md:right-[50px] bg-[#7dd821] h-9 w-32 flex justify-around items-center rounded-lg font-semibold hover:bg-[#77ee00]">
                <a href={StatMech} download="StatMech">
                  Download
                </a>
                <img src={downloadIcon} alt="download" className="h-5" />
              </div>{" "}
              <Document file={StatMech} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => {
                    return (
                      <Page
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    );
                  })}
              </Document>
            </>
          ) : (
            ""
          )}



        </div>
      </div>
    </>
  );
}

export default Pdf;
