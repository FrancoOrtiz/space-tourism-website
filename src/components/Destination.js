import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DestInfo } from './DestInfo'
import { LayoutScreen } from './LayoutScreen'
import { Navbar } from './Navbar'

export const Destination = () => {

  const [pick, setPick] = useState(0);

  return (
    <LayoutScreen background="bg-destination-mobile lg:bg-destination-desktop pb-20">
      <Navbar />
      <p className="text-white text-lg text-center lg:text-left lg:text-2xl tracking-widest lg:pl-48 mt-14 "><span className="mr-2 lg:mr-6 text-gray-500 font-bold">01</span> PICK YOUR DESTINATION</p>
      <div className="flex flex-col lg:flex-row w-9/12 justify-between m-auto mt-8 lg:mt-20">
        <img src={DestInfo[pick].img} className="" alt="moon"></img>
        <div className="text-white w-full lg:w-2/5 ">
          <div className="flex h-12 gap-6 lg:h-14 items-center justify-center lg:justify-start mt-4 lg:mt-0 m-auto">
            { 
              DestInfo.map((destination, index) => {
                return <span key={destination.id} onClick={() => setPick(destination.id)} className={`cursor-pointer tracking-widest relative h-full flex items-center  ${pick === index ? 'text-white after:h-1 after:left-0 after:w-full after:bg-white after:absolute after:bottom-0 after:rounded-2xl' : 'text-gray-400'}`}>{destination.name}</span>
              })
            }
          </div>
          <h2 className="font-bellefair mt-6 text-center lg:text-left text-6xl lg:text-9xl w-full">{DestInfo[pick].name}</h2>
          <p className="text-gray-400 h-32 mt-2 text-center lg:text-left">{DestInfo[pick].desc}</p> 
          <div className="flex flex-col text-center lg:text-left lg:flex-row border-t-gray-700 border-solid border-t-2 rounded-sm gap-8 lg:gap-16 mt-10 pt-4">
            <div className="">
              <span className="text-gray-400 text-sm">AVG. DISTANCE</span>
              <p className="font-bellefair text-3xl mt-2">{DestInfo[pick].avg}</p>
            </div>
            <div>
              <span className="text-gray-400 text-sm">EST. TRAVEL TIME</span>
              <p className="font-bellefair text-3xl mt-2">{DestInfo[pick].time}</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutScreen>
  )
}
