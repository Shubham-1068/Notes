import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Note from "./Resources/Notes.jpg";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


function value(x) {
localStorage.setItem('doc' , x);
}

function Notes() {

  return (
    <>
      <div className="relative w-screen flex justify-center items-center">
          <p className=" absolute -top-1 mt-4 text-3xl font-bold border-b-4 border-green-500">Notes</p>
        <div className="pt-12 pb-10 w-[92%] border-2 rounded-lg border-slate-400 flex flex-col items-center md:h-screen flex-wrap">

          {/* selection section */}
          
          {(localStorage.getItem('sem') == '12' && localStorage.getItem('dept') == 'SASH')?<div className="mt-9">

              <Link to='/results/view'>
                <div className="h-[210px] w-[170px] border-2 border-slate-300 rounded-lg flex justify-center items-center flex-col cursor-pointer" onClick={()=>{value("ComptonEffect")}}>
                  <img src={Note} alt="note" className="h-[150px]" />
                  <p>Compton Effect</p>
                </div>
              </Link>

          </div>:"" }

          {(localStorage.getItem('sem') == '12' && localStorage.getItem('dept') == 'SASH')?<div className="mt-9">

<Link to='/results/view'>
  <div className="h-[210px] w-[170px] border-2 border-slate-300 rounded-lg flex justify-center items-center flex-col cursor-pointer" onClick={()=>{value("QuantumParticle")}}>
    <img src={Note} alt="note" className="h-[150px]" />
    <p>Quantum Particle</p>
  </div>
</Link>

</div>:"" }

          {(localStorage.getItem('sem') == '12' && localStorage.getItem('dept') == 'SASH')?<div className="mt-9">

<Link to='/results/view'>
  <div className="h-[210px] w-[170px] border-2 border-slate-300 rounded-lg flex justify-center items-center flex-col cursor-pointer" onClick={()=>{value("SchrodingerEquation")}}>
    <img src={Note} alt="note" className="h-[150px]" />
    <p>Schrodinger Equation</p>
  </div>
</Link>

</div>:"" }

          {(localStorage.getItem('sem') == '12' && localStorage.getItem('dept') == 'SASH')?<div className="mt-9">

<Link to='/results/view'>
  <div className="h-[210px] w-[170px] border-2 border-slate-300 rounded-lg flex justify-center items-center flex-col cursor-pointer" onClick={()=>{value("StatMech")}}>
    <img src={Note} alt="note" className="h-[150px]" />
    <p>Statistical Mech.</p>
  </div>
</Link>

</div>:"" }

        </div>
      </div>
    </>
  );
}

export default Notes;
