import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
        <div className="lg:hidden absolute flex flex-col gap-8 pt-32 backdrop-blur-[98px] top-0 right-0 w-9/12 h-screen pl-10">
            <Link to="/" className="text-gray-300 font-bold relative text-lg flex items-center"><span className="text-white mr-2 text-lg font-semibold ">00</span>HOME</Link>
            <Link to="/destination" className="text-gray-300 font-bold relative text-lg flex items-center"><span className="text-white mr-2 text-lg font-semibold ">01</span>DESTINATION</Link>
            <Link to="/crew" className="text-gray-300 font-bold relative text-lg flex items-center"><span className="text-white mr-2 text-lg font-semibold ">02</span>CREW</Link>
            <Link to="/technology" className="text-gray-300 font-bold relative text-lg flex items-center"><span className="text-white mr-2 text-lg font-semibold ">03</span>TECHNOLOGY</Link>
        </div>
    </>
  )
}
