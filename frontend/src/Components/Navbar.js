import React from "react";
import "./components.css";
import finderIcon from "./finder.png";
import homeIcon from "./homeIcon.svg";
import exploreIcon from "./exploreIcon.svg";
import profileIcon from "./profileIcon.svg";
import logoutIcon from "./logoutIcon.svg";
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
export default function Navbar() {
    const { logout } = useAuth();
	return (
		<ul className='navbarStyle'>
			<Link to='/dashboard'>
				<li className='navItem'>
					<span className='m-icon'>
						<img src={homeIcon} />
					</span>
					<span>Home </span>
				</li>
			</Link>
			<Link to='/explore'>
				<li className='navItem'>
					<span className='m-icon'>
						<img src={exploreIcon} />
					</span>
					<span>Explore</span>
				</li>
			</Link>
			<Link to='/search'>
				<li className='m-icon searchIcon'>
					<img src={finderIcon} />
				</li>
			</Link>
			<Link to='/profile'>
				<li className='navItem'>
					<span className='m-icon'>
						<img src={profileIcon} />
					</span>
					<span>Profile</span>
				</li>
			</Link>
			<Link to='/logout'>
				<li className='navItem'>
					<span className='m-icon'>
						<img src={logoutIcon} />
					</span>
					Logout
				</li>
			</Link>
			<Link to='/search' onClick={()=>logout()}>
				<li className='d-icon'>
					<img src={finderIcon} />
				</li>
			</Link>
		</ul>
	);
}
