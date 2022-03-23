import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutScreen } from './LayoutScreen'
import { Navbar } from './Navbar'

export const Home = () => {

  return (
    <LayoutScreen background="bg-home-mobile lg:bg-home-desktop">
         <Navbar />
         <div className="pb-16 lg:pb-0 w-11/12 lg:w-3/4 items-center m-auto text-white flex flex-col lg:flex-row lg:justify-between mt-16 lg:mt-44">
           <div className="w-full lg:w-1/3 flex items-center lg:items-start flex-col gap-6">
             <span className="text-xl lg:text-3xl tracking-widest text-gray-light font-barlowCon">SO, YOU WANT TO TRAVEL TO</span>
             <h1 className="text-8xl lg:ml-4 lg:text-9xl font-bellefair">SPACE</h1>
             <p className="text-gray-light leading-7 text-center lg:text-left">Let´s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we´ll give you a truly out of this world experience!</p>
           </div>
           <Link to="/destination">
            <button className="w-44 h-44 lg:w-64 lg:h-64 rounded-full font-bellefair bg-white text-black text-2xl lg:text-3xl mt-24">EXPLORE</button>
           </Link>
         </div>
    </LayoutScreen>
  )
}
