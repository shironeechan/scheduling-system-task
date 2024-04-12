import React from 'react'
import { Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <br/>
                <li>
                    <span onClick={() => {window.location.href="/home"}}>Home</span>
                </li>
                <li>
                    <span onClick={() => {window.location.href="/"}}>Scheduling</span>
                </li>
                <li>
                    <span onClick={() => {window.location.href="/about"}}>About</span>
                </li>
                <li>
                    <span onClick={() => {window.location.href="/signup"}}>Sign Up</span>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}