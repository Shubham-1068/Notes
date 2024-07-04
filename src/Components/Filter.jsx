import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Filter() {

useEffect(() => {
  localStorage.clear()
},)


  function sem(x){
    if (x!="") {
      localStorage.setItem('sem' , x);
    }
  }

  function dept(x){
    if (x!="") {
      localStorage.setItem('dept' , x);
    }
  }
  
  return (
    <>
      <div id="test" className="mt-6 w-screen h-[350px] md:h-[200px] flex justify-center items-center">
        <div className="flex relative justify-around items-center border-2 border-gray-300 rounded-lg w-[92%] h-[95%] text-xl font-semibold">

            <p className="absolute top-[18px] md:left-[63px] left-5 font-bold text-3xl border-b-4 border-[#7dd821]">Filters</p>

          <div className="mt-14 md:mt-12 w-[90%] flex justify-around items-center flex-col md:flex-row md:gap-0 gap-9">

          <div className="flex gap-3">
            <p className="text-[17px] md:text-xl">Selct Your Semester : </p>
            <select id="sem" className="border-b-2 border-[#7dd821] outline-none text-center text-[17px] md:text-xl bg-transparent text-slate-500" onChange={()=>{sem(document.getElementById('sem').value)}}>
              <option value="">Select an option</option>
              <option value="12">Semester-1&2</option>
              {/* <option value="3">Semester-3</option>
              <option value="4">Semester-4</option>
              <option value="5">Semester-5</option>
              <option value="6">Semester-6</option>
              <option value="7">Semester-7</option>
              <option value="8">Semester-8</option> */}
            </select>
          </div>

          <div className="flex gap-3">
            <p className="text-[17px] md:text-xl">Select Your Department : </p>
            <select id="dept" className="border-b-2 border-[#7dd821] outline-none text-center text-[17px] md:text-xl bg-transparent text-slate-500" onChange={()=>{dept(document.getElementById('dept').value)}}>
              <option value="">Select an option</option>
              <option value="SASH">SASH</option>
              {/* <option value="CS">CSE-CS</option>
              <option value="AIML">CSE-AIML</option>
              <option value="DS">CSE-DS</option> */}

            </select>
          </div>

          <Link to='/results'>
            <div className='flex justify-center items-center border-2 rounded-lg border-[#7dd821] h-10 w-32 hover:bg-[#7dd821] cursor-pointer text-center'>Apply</div>
          </Link>

          </div>

        </div>
      </div>
    </>
  );
}

export default Filter;
