import React from 'react'
import { Crew } from './components/Crew'
import { Destination } from './components/Destination'
import { Home } from './components/Home'
import { Technology } from './components/Technology'
import { BrowserRouter, Navigate,Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}