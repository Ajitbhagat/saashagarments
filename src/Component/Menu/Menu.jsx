import React from 'react'
import  "./Menu.css";
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div id='menu'>
        <ul>
        <li><Link className='link_menu' to={"./corporate"}>Corporate</Link></li>
        <li><Link className='link_menu' to={"./hotel"}>Hotel</Link></li>
        <li><Link className='link_menu' to={"./industrial"}>Industrial</Link></li>
        <li><Link className='link_menu' to={"./hospital"}>Hospital</Link></li>
        <li><Link className='link_menu' to={"./security"}>Security</Link></li>
        <li><Link className='link_menu' to={"./byprofession"}>By Profession</Link></li>
        
        </ul>
    </div>
  )
}

export default Menu