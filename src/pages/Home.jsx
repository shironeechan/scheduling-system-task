import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <br/>
        <hr/>
        <h2>Home</h2>
    </div>
  )
}