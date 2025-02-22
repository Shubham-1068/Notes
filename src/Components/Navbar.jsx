import React from 'react'
import './style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Resources/logoNotes.png';
import dicon from './Resources/lightMode.svg'
import licon from './Resources/darkmode.png'
import menuOpen from './Resources/menuOpen.svg'

function Navbar() {

    let [sw , swChange] = useState(false);
    let [dm , dmChange] = useState(false);
    let [dmBs , dmBsChange] = useState(false);

    function toggle() {
        if(sw == false){
            document.getElementById('menuList').style.display = 'flex';
            // document.getElementById('menu').src = menuClose;
            // document.getElementById('mode').src = licon;
            swChange(true);
        }
        if(sw == true){
            document.getElementById('menuList').style.display = 'none';
            // document.getElementById('menu').src = menuOpen;
            // document.getElementById('mode').src = dicon;
            swChange(false);
        }
    }

    function darkMode() {
        if(dm == false){
            document.querySelector('body').style.backgroundColor = 'black';
            document.querySelector('body').style.color = 'white';
            document.getElementById('mode').src = dicon;
            dmChange(true);
        }
        if(dm == true){
            document.querySelector('body').style.backgroundColor = 'white';
            document.querySelector('body').style.color = 'black';
            document.getElementById('mode').src = licon;
            dmChange(false);
        }
    }
    
    return (
    <>
        <nav className='h-28 w-screen relative flex justify-between items-center'>
            <div className="ml-2 md:ml-8">
                <Link to='/'><img src={logo} alt="logo" className='h-[69px] md:h-20'/></Link>
            </div>
            <div className="hidden absolute md:flex justify-center h-auto w-screen">
                <ul className='w-60 flex justify-between items-center font-semibold'>
                    <li className='hover:underline'><Link to='/'>Home</Link></li>
                    <li className='hover:underline'><a href="https://github.com/Shubham-1068" target='_blank'>GitHub</a></li>
                    <li className='hover:underline'><Link to='/FAQ'>FAQ</Link></li>
                </ul>
            </div>
            <div className="hidden mr-2 md:mr-8 md:flex items-center gap-6 font-semibold relative z-10 ">
                <div className='flex justify-center items-center border-2 rounded-lg border-[#7dd821] h-9 w-20 hover:bg-[#7dd821] cursor-pointer'><Link to='/contact'>Contact</Link></div>
                <div className="">
                    <img src={licon} alt="darkmode" className='h-9 cursor-pointer bg-black border-2 border-white rounded-full p-1' onClick={()=>{darkMode()}}/>
                </div>
            </div>

            {/* for small screen devices */}

            <img src={menuOpen} alt="open" id='menu' className='md:hidden block absolute z-40 h-10 right-5 top-9 bg-white rounded-lg' onClick={()=>{toggle()}}/>

            <div id='menuList' className="hidden bg-black bg-opacity-[93%] rounded-full text-white w-[600px] h-[600px] mt-8  flex-col absolute -top-[290px] -right-[200px] justify-center items-center gap-6 z-30">
                <ul className='w-60 flex flex-col justify-between items-center font-semibold gap-6 absolute left-0 bottom-[160px]'>
                    <li className='hover:underline relative -left-6 text-2xl' onClick={()=>{toggle()}}><Link to='/'>Home</Link></li>
                    <li className='hover:underline relative top-5 left-1 text-2xl' onClick={()=>{toggle()}}><a href="https://github.com/Shubham-1068" target='_blank'>GitHub</a></li>
                    <li className='hover:underline relative top-9 left-11 text-2xl' onClick={()=>{toggle()}}><Link to='/FAQ'>FAQ</Link></li>
                </ul>
                <div className="flex absolute bottom-12">
                    <div className='hover:underline flex justify-center items-center text-2xl font-semibold h-9 w-20 cursor-pointer relative bottom-5 right-9' onClick={()=>{toggle()}}><Link to='/contact'>Contact</Link></div>
                    <div className="" onClick={()=>{toggle()}}>
                        <img src={licon} alt="darkmode" className='h-9 cursor-pointer bg-transparent border-2 border-white rounded-full p-1' id='mode' onClick={()=>{darkMode()}}/>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
