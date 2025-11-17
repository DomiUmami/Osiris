import React, { useState } from 'react';
import '../styles/App.css';
/*import { useHistory } from 'react-router-dom';*/


import Header from "../components/header.jsx";
import Footer from '../components/footer.jsx';

import Agape from '../components/Agape.js'

/*
import "../styles/Header.css"
import "../styles/Layout.css"
import "../styles/Contact.css"
import "../styles/Cards.css"
import "../styles/Well.css"
*/

import "../styles/Temp.css"

/*Add functionality to main that renders page of monster "hunted" */

function App() {

   const [isHunted, setIsHunted] = useState(false);


     return (
       <div className="grid-container">
      <Header></Header>

      <aside className="sidebar">
      <Agape />
      </aside>

      <main className="main">
      Hunted
      </main>

      <aside className="rightside">
    
      </aside>

   
    </div>
  );
}


export default App;