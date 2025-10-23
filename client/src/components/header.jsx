import React, { useState } from "react";
import "../styles/Header.css";
import { useLocation } from "react-router-dom";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleHover = () => {
      if(addEventListener('mouseenter')){
        setIsHover(!isHover);
    }
  };

  const routeTitles = {
    "https://duminimumcontact.vercel.app" : "Contact",
    "/contact": "Contact",
    
  };

  // Default fallback if path doesn’t match
  const headerName = routeTitles[location.pathname] || "Home" /*This will change when more pages are set up*/;

const goHome = () => {
    // External link (different domain)
    window.location.href = "https://duminimumreactics.vercel.app/";
  };
const goContact = () => {
    // External link (different domain)
    window.location.href = "https://duminimumcontact.vercel.app/";
  };

  return (
       <header className="header">
      <h1 className="logo" onClick={goHome} >
        {headerName}
      </h1>

        <nav className="nav2" >
        <h1 className="links" onClick={goContact}>Contact</h1>
        <h1 className="links" >Placeholder</h1>
        

     </nav>
    </header>
  );
}

export default Header;