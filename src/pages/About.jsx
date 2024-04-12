import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h2>About</h2>
    </div>
  )
}