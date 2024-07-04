import React from 'react'
import image from './Resources/image.jpg'
import arrow from './Resources/arrow.png'

function Intro() {
  return (
    <>
        <div className="w-screen h-[460px] flex justify-center items-center">
        <div className="flex justify-around items-center border-2 border-gray-300 rounded-lg w-[92%] h-[450px]">
            <div className="w-[90%] lg:w-[50%] flex flex-col items-center gap-5">
                <p className='text-[45px] lg:text-6xl font-extrabold flex justify-center items-center'>A one stop library for notes</p>

                <p className='text-[15px] md:text-[18px] lg:text-lg font-medium text-slate-400 flex justify-center items-center'>"Download high-quality notes across various subjects and topics. Simplify your study sessions with our curated collection of reliable resources. Streamline your studies with our convenient collection of educational resources."</p>

                <div className='md:mt-4 mt-0 flex justify-center items-center gap-2 rounded-lg bg-[#7dd821] h-10 md:h-14 w-40 text-lg font-bold text-slate-100 hover:bg-[#7dd821] cursor-pointer'>Get Started <img src={arrow} alt="arrow" className='rounded-full h-6'/></div>
            </div>

            <div className="hidden lg:block h-[300px] rounded-lg border-4 border-[#7dd821]">
            <img src={image} alt="image" className='h-[300px] rounded-lg border-2 border-gray-400 -translate-x-4 -translate-y-4'/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Intro
