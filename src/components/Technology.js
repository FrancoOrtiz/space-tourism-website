import React from 'react'
import { useState } from 'react/cjs/react.development'
import { LaunchInfo } from '../data/LaunchInfo'
import { LayoutScreen } from './LayoutScreen'
import { Navbar } from './Navbar'

export const Technology = () => {

  const [launch, setLaunch] = useState(0);

  return (
    <LayoutScreen background="bg-technology-mobile lg:bg-technology-desktop">
      <Navbar />
      <p className="text-white text-center float-none lg:float-right lg:w-[86%] text-lg lg:text-left lg:text-2xl tracking-widest mt-8"><span className="text-gray-500 mr-2 lg:mr-6 font-bold">03</span> SPACE LAUNCH 101</p>
      <div className="flex flex-col w-full m-auto lg:w-[86%] lg:mr-0 lg:flex-row mt-10 pb-20">
        <div className={`w-full lg:w-3/5 h-52 lg:h-[480px] lg:order-last ${LaunchInfo[launch].img} ${LaunchInfo[launch].imgDes} bg-cover bg-top lg:bg-center`}>
        </div>
        <div className="flex lg:flex-col gap-3 lg:gap-6 justify-center lg:justify-start mt-10 ">
          <button onClick={() => setLaunch(0)} className={`h-11 lg:h-20 w-11 lg:w-20 lg:text-4xl font-bellefair border-[1px] border-gray-500 rounded-full text-white ${launch === 0 ? 'bg-white text-black' : 'text-white' }`}>1</button>
          <button onClick={() => setLaunch(1)} className={`h-11 lg:h-20 w-11 lg:w-20 lg:text-4xl font-bellefair border-[1px] border-gray-500 rounded-full text-white ${launch === 1 ? 'bg-white text-black' : 'text-white' }`}>2</button>
          <button onClick={() => setLaunch(2)} className={`h-11 lg:h-20 w-11 lg:w-20 lg:text-4xl font-bellefair border-[1px] border-gray-500 rounded-full text-white ${launch === 2 ? 'bg-white text-black' : 'text-white' }`}>3</button>
        </div>
        <div className="text-center lg:text-left w-[85%] lg:px-20 leading-7 text-gray-light m-auto mt-8 flex flex-col gap-1 lg:gap-3">
          <span>THE TERMINOLOGY...</span>
          <h1 className="text-white text-3xl lg:text-6xl font-bellefair">{LaunchInfo[launch].name}</h1>
          <p className="mt-4 lg:pr-[90px]">{LaunchInfo[launch].desc}</p>
        </div>
      </div>
    </LayoutScreen>
  )
}
