import React from 'react'
import './components.css'
import finderIcon from './finder.png'
import { useAuth } from './AuthProvider'
function Navbar() {

    const { logout } = useAuth();

    return (
            <ul className="navbarStyle">
                <li> <span>Home </span></li>
                <li><span>Explore</span></li>
                <li><span>Profile</span></li>
                <li><span onClick={()=>logout()}>Logout</span></li>
                <li><img src={finderIcon}/></li>
            </ul>
    )
}

export default Navbar
