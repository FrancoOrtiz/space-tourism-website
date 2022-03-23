import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Close } from './svg/close'
import { Hamburger } from './svg/hamburger'
import { Logo } from './svg/logo'
import { Menu } from './Menu'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  return (    
    <>
        <header className="relative flex w-full items-center justify-between pt-10 pr-6 pl-6 lg:pl-14 lg:pr-0">
          <Logo /> 
          <nav className="hidden w-3/5 h-24 gap-10 relative backdrop-blur-[98px] lg:flex items-center lg:after:absolute lg:after:h-0.5 lg:after:w-3/5 lg:after:bg-gray-700 lg:after:-left-2/4 justify-center font-barlowCon tracking-widest">
            <Link to="/" className="text-gray-300 relative text-sm hover:after:h-1 hover:after:w-full hover:after:bg-white hover:after:absolute hover:after:bottom-0 h-full flex items-center hover:after:rounded-2xl"><span className="text-white mr-2 text-sm font-semibold hidden lg:inline">00</span>HOME</Link>
            <Link to="/destination" className="text-gray-300 relative text-sm hover:after:h-1 hover:after:w-full hover:after:bg-white hover:after:absolute hover:after:bottom-0 h-full flex items-center hover:after:rounded-2xl"><span className="text-white mr-2 text-sm font-semibold hidden lg:inline">01</span>DESTINATION</Link>
            <Link to="/crew" className="text-gray-300 relative text-sm hover:after:h-1 hover:after:w-full hover:after:bg-white hover:after:absolute hover:after:bottom-0 h-full flex items-center hover:after:rounded-2xl"><span className="text-white mr-2 text-sm font-semibold hidden lg:inline">02</span>CREW</Link>
            <Link to="/technology" className="text-gray-300 relative text-sm hover:after:h-1 hover:after:w-full hover:after:bg-white hover:after:absolute hover:after:bottom-0 h-full flex items-center hover:after:rounded-2xl"><span className="text-white mr-2 text-sm font-semibold hidden lg:inline">03</span>TECHNOLOGY</Link>
          </nav>
          <button className="absolute right-6" onClick={handleOnClick}>
            {isOpen ? <Close /> : <Hamburger />}
          </button>
        </header>
        {isOpen && <Menu />}
    </>
  )
}
