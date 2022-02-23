import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets/shared/logo'
import { LayoutScreen } from './LayoutScreen'

export const Navbar = () => {
  return (
    <>
        <header className="flex w-full m-auto items-center justify-between pt-10 pl-12">
          <Logo /> 
          <nav className="w-3/5 h-24 relative backdrop-blur-3xl flex items-center justify-center after:absolute after:h-0.5 after:w-3/5 after:bg-gray-700 after:-left-2/4">
            <Link to="/" className="text-gray-300 mr-10 text-xs"><span className="text-white mr-2 text-sm font-semibold">00</span>HOME</Link>
            <Link to="/" className="text-gray-300 mr-10 text-xs"><span className="text-white mr-2 text-sm font-semibold">01</span>DESTINATION</Link>
            <Link to="/" className="text-gray-300 mr-10 text-xs"><span className="text-white mr-2 text-sm font-semibold">02</span>CREW</Link>
            <Link to="/" className="text-gray-300 mr-10 text-xs "><span className="text-white mr-2 text-sm font-semibold">03</span>TECHNOLOGY</Link>
          </nav>
        </header>
    </>
  )
}
