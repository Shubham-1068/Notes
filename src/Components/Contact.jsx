import React from 'react'
import github from './Resources/github.png'
import mail from './Resources/mail.png'

function Contact() {
  return (
    <>
      <div className="w-screen h-screen flex items-center flex-col">
        <p className='text-4xl font-semibold w-56 border-b-4 border-[#7dd821] text-center'>Contact us :</p>
        <div className="mt-6 h-[650px] w-[90%] border-2 border-slate-300 flex flex-col items-center rounded-lg">
            <div className="mt-8 flex justify-center items-center gap-5">
                <img src={mail} alt="mail" className='h-16'/>
                <a href='https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=154&ct=1720112816&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26culture%3den-in%26country%3din%26RpsCsrfState%3d02eb2278-8f78-2596-9739-c276413cc8b7&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c' target='_blank' className='text-lg font-medium hover:underline'>itsme1068@outlook.com</a>
            </div>

            <div className="mt-8 flex justify-center items-center gap-5">
                <img src={github} alt="github" className='h-16'/>
                <a href="https://github.com/Shubham-1068" target='_blank' className='text-lg font-medium hover:underline'>Shubham-1068</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
