import React, { useState } from "react";
import "../styles/Header.css";


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


  return (
    <header className="header">
      <h1 className="logo">{headerName}</h1>
        
        <nav className="nav2" >
        <h1 className="links">Placeholder</h1>
               {isHover && (
          <ul className="links-menu">

            <li><a href="/contact">Contact</a></li>

          </ul>
        )}
        <h1 className="links">Placeholder</h1>
               {isHover && (
          <ul className="links-menu">

            <li><a href="/contact">Contact</a></li>

          </ul>
        )}
        <h1 className="links">Placeholder</h1>
               {isHover && (
          <ul className="links-menu">

            <li><a href="/contact">Contact</a></li>

          </ul>
        )}
        <h1 className="links">Placeholder</h1>
               {isHover && (
          <ul className="links-menu">

            <li><a href="/contact">Contact</a></li>

          </ul>
        )}
        <h1 className="links">Placeholder</h1>
               {isHover && (
          <ul className="links-menu">

            <li><a href="/contact">Contact</a></li>

          </ul>
        )}
     </nav>
    </header>
  );
}

export default Header;