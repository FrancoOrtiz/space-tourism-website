import React from 'react'
import { useState } from 'react/cjs/react.development'
import { CrewInfo } from '../data/CrewInfo'
import { LayoutScreen } from './LayoutScreen'
import { Navbar } from './Navbar'

export const Crew = () => {

  const [crew, setCrew] = useState(0);

  return (
    <LayoutScreen className="relative" background="bg-crew-mobile lg:bg-crew-desktop" >
      <Navbar />
      <div className="flex flex-col lg:flex-row w-4/5 m-auto mt-10 lg:mt-20 gap-10 lg:gap-0 text-white relative lg:justify-between h-[702px]  lg:pb-0">
        <p className="text-white order-1 w-full lg:w-auto text-lg text-center lg:text-left lg:text-2xl tracking-widest lg:absolute"><span className="mr-2 lg:mr-6 text-gray-500 font-bold">02</span> MEET YOUR CREW</p>
        <div className="flex flex-col order-3 lg:order-2 gap-6 w-full text-center lg:text-left lg:w-2/5 lg:mt-44 ">
          <span className="text-gray-400 text-xl lg:text-3xl font-bellefair">{CrewInfo[crew].task}</span>
          <h1 className="font-bellefair text-3xl lg:text-5xl">{CrewInfo[crew].name}</h1>
          <p className="text-gray-400 mt-2 leading-8 lg:pr-10 lg:h-40 ">{CrewInfo[crew].desc}</p>
          <div className="flex justify-center lg:justify-start order-first lg:order-last lg:absolute lg:bottom-20 gap-5">
            { 
              CrewInfo.map((crewMember, index) => {
                return <button key={crewMember.id} onClick={() => setCrew(crewMember.id)} className={`h-3 w-3 lg:h-4 lg:w-4 rounded-full ${crew === index ? "bg-white" : 'bg-gray-500'}`}></button>
              })
            }
          </div>
        </div>
        <div className="w-full h-56 lg:h-[702px] flex justify-center lg:w-2/4 order-2 border-b-[1px] border-gray-500 lg:border-b-0">
          <img className="h-full" src={CrewInfo[crew].img} alt="crew"></img>
        </div>
      </div>
    </LayoutScreen>
  )
}
