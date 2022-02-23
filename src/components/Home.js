import React from 'react'
import { LayoutScreen } from './LayoutScreen'
import { Navbar } from './Navbar'

export const Home = () => {
  return (
    <LayoutScreen background="bg-home-desktop">
         <Navbar />
    </LayoutScreen>
  )
}
