import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { 
  faBars,
  faHome,
  faGaugeHigh,
  faTasks,
  faNotesMedical,
  faBookmark,
  faPen,
  faComments,
  faUser,
  faBriefcase,
  faBell
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.svg';



function Navbar() {
  const [open,setopen]= useState(false);

  const Menus = [
  { name: "Home", icon: faHome },
  { name: "Dashboard", icon: faGaugeHigh },
  { name: "Tasks", icon: faTasks },
  { name: "Notes", icon: faNotesMedical },
  { name: "Flashcards", icon: faBookmark },
  { name: "Quiz", icon: faPen },
  { name: "Chatbot", icon: faComments },
  { name: "Resume", icon: faUser },
  { name: "Interview", icon: faBriefcase },
  { name: "Mental health", icon: faBell },
];

  return (
    
    <div className='flex'>

      <div className={`h-screen bg-[#170224] rounded-r-[80px]  text-[#E1F0E8]  shadow-xl shadow-[#11001C] p-4 ${open? 'w-60':'w-20'} duration-300`}> 
      
        <FontAwesomeIcon icon={faBars} className={`text-3xl mt-5 ${open && "rotate-90"} duration-300 cursor-pointer`} onClick={() => setopen(!open)}/>

          <div className='flex '>
            <img src={logo} className={`text-sm h-8 mt-7 ${!open && "rotate-180"} duration-300`}></img>
            <h1 className={`mt-7 ms-3 space-y-6 text-2xl font-bold ${!open && "scale-0"}`}><em>Students</em></h1>
          </div>

          <div>
            <ul className='mt-8 space-y-7 gap-7'>
              {Menus.map((menu,index)=>(
                <Link to={`/${menu.name}`} key={index}>
                  <li className='flex  mb-5 text-lg font-semibold cursor-pointer justify-normal hover:bg-[#11001c] rounded-md p-2 ' key={index}>
                  <FontAwesomeIcon icon={menu.icon} className={`text-2xl me-4 ${!open && "rotate-[360deg]"} duration-300`} 
                  >
                  
                  </FontAwesomeIcon>
                  <span className={` ${!open && "scale-0"} transition-all`}>{menu.name}</span>
                </li>
                </Link>

                
              ))}
            </ul>
          </div>
          </div>
      
    </div>
  )
}

export default Navbar
