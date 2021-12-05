import React from 'react'
import './components.css'
import finderIcon from './finder.png'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router';
function Navbar() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
            <ul className="navbarStyle">
                <li><span  onClick={()=>{navigate('/dashboard')}}>Home </span></li>
                <li><span onClick={()=>{navigate('/explore')}}>Explore</span></li>
                <li><span onClick={()=>{navigate('/profile')}}>Profile</span></li>
                <li><span onClick={()=>logout()}>Logout</span></li>
                <li><img src={finderIcon}/></li>
            </ul>
    )
}

export default Navbar
