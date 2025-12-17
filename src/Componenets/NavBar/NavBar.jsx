import React, { useEffect, useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png';
import search from '../../assets/search_icon.svg';
import bell from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../Firebase';

function NavBar() {

  const NavRef=useRef();

 useEffect(() => {
  const handleScroll = () => {
    if (!NavRef.current) return; // ✅ IMPORTANT

    if (window.scrollY >= 80) {
      NavRef.current.classList.add('Nav-Dark');
    } else {
      NavRef.current.classList.remove('Nav-Dark');
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll); // ✅ CLEANUP
  };
}, []);
  return (
    <div ref={NavRef} className='NavBar'>
      <div className="Nav-left">
        <img src={logo} alt='netflix logo'></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="Nav-right">
        <img src={search} alt='search-icon' className='icons'></img>
        <p>Children</p>
        <img src={bell} alt='bell-icon' className='icons'></img>
        <div className="NavBar-profile">
        <img src={profile} alt='profile' className='profile'></img>
        <img src={caret_icon} alt=''></img>
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of netflix</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar