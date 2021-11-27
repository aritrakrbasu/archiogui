import React from 'react'
import './components.css'
import finderIcon from './finder.png'
function Navbar() {
    return (
            <ul className="navbarStyle">
                <li> <span>Home </span></li>
                <li><span>Explore</span></li>
                <li><span>Profile</span></li>
                <li>Logout</li>
                <li><img src={finderIcon}/></li>
            </ul>
    )
}

export default Navbar
