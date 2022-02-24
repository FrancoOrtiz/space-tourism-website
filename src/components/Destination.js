import React from 'react'
import { LayoutScreen } from './LayoutScreen'
import { Navbar } from './Navbar'

export const Destination = () => {
  return (
    <LayoutScreen background="bg-destination-mobile lg:bg-destination-desktop">
      <Navbar />
      <p><span>01</span> PICK YOUR DESTINATION</p>
    </LayoutScreen>
  )
}
