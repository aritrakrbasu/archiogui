import React from 'react'
import { Link } from 'react-router-dom'
import smallLogo from './logoSmall.png'

function Header() {
    return (
        <div className="headerImageContainer"> 
            <Link to="/dashboard">
                <img src={smallLogo} />
            </Link>
        </div>
    )
}

export default Header
