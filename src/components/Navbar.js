import React from "react"

// CSS

import "../styles/components/Navbar.css";

// IMAGES

import Epicgameslogo from "../assets/images/Epic_logo.png";

const Navbar = () => {
  return <div className='navbar_container'>
      <div className='logo_container'>

        <img className='logo' src={Epicgameslogo} />
      </div>
        
      

          <ul className ="navBar_List">
              <li className='navbar_list_item'>STORE</li>
              <li className='navbar_list_item'>NEWS</li>
              <li className='navbar_list_item'>FAQ</li>
              <li className='navbar_list_item'>HELP</li>
              <li className='navbar_list_item'>UNREAL ENGINE</li>
              <div className='divider'></div>
              <li className='navbar_list_item'>ABOUT EPIC</li>
          </ul>
          
  </div>
};

export default Navbar