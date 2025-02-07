import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser,faAddressCard  } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
// const id = document.getElementById('about');
const Navbar = () => {
  return (
    <div className='bg-black/80 sm:bg-[#222222] sm:my-2 fixed top-0 sm:left-0 w-full sm:w-[120px] sm:h-full '>
        <ul className="flex justify-around gap-x-2  sm:flex-col sm:justify-around  sm:text-xl ">
          <a href="#"><div className='m-auto text-center bg-black w-full py-5 hov'>
           <li className='hidden sm:block text-3xl '><FontAwesomeIcon icon={faHouse} /></li>
            <li className='sm:py-4 text-sm'>Home</li>
            </div>
            </a>
           <a href="#about"> <div className='m-auto text-center py-5 hov w-full'>
            <li className='hidden sm:block text-3xl'><FontAwesomeIcon icon={faUser} /></li>
            <li className='sm:py-4 text-sm'>About</li>
            </div>
            </a>
           <a href="#projects"> <div className='m-auto text-center py-5 hov w-full'>
            <li className='hidden sm:block text-3xl'><FontAwesomeIcon icon={faReact } spin spinReverse /></li>
            <li className='sm:py-4 text-sm'>Projects</li>
            </div>
            </a>
            <a href="#contact"><div className='m-auto text-center py-5 hov w-full'>
            <li className='hidden sm:block text-2xl'><FontAwesomeIcon icon={faAddressCard} /></li>
            <li className='sm:py-4 text-sm'>Contact</li>
            </div>
            </a>
        </ul>
    </div>
  )
}

export default Navbar;