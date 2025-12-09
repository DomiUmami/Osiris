import React, { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const routeTitles = {
    "https://duminimumosiris.vercel.app" : "Osiris",
    
    
  };

  // Default fallback if path doesn’t match
  const headerName = routeTitles[location.pathname] || "Home" /*This will change when more pages are set up*/;

const goHome = () => {
    // External link (different domain)
    window.location.href = "https://duminimum.vercel.app/";
  };

  return (
       <header className="header">
      <h1 className="logo" onClick={goHome} >
        {headerName}
      </h1>

        <nav className="nav2" >
        <h2 className="links" >All</h2>
        <h3 className="links" >MHW</h3>
        <h3 className="links" >MHWilds</h3>
     </nav>

     <nav className="nav">
        <button className="dropdown-btn" 
        onClick={toggleDropdown}
        >
          Menu
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href="https://duminimumcontact.vercel.app">Contact</a></li>
            <li><a href="https://duminimum.vercel.app/cred">Credentialing</a></li>
            <li><a href="https://duminimumosiris.vercel.app">Osiris</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;