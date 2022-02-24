import React from 'react'
import { Crew } from './components/Crew'
import { Destination } from './components/Destination'
import { Home } from './components/Home'
import { Technology } from './components/Technology'
import { BrowserRouter, Navigate,Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';


export const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/crew" element={<Crew />}></Route>
            <Route path="/technology" element={<Technology />}></Route>
            
            <Route path="*" element={<Navigate to="/"/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}