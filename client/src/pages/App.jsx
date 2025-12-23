import React, { useState, useEffect } from 'react';


import Header from "../components/header.jsx";

import Agape from '../components/Agape.js'
import PrimaryAmmo from '../components/PrimaryAmmo.jsx'

import "../styles/Temp.css"

/*Add functionality to main that renders page of monster "hunted" */


function App() {
const [hunted, setHunted] = useState(null)

     return (
       <div className="grid-container">
      <Header></Header>

      <aside className="sidebar">
   
      </aside>

      <main className="main">
      
      {hunted ? (
        <PrimaryAmmo monster={hunted} />
      ) : (
        <p className='profile-name'>Select a monster...</p>
      )}
      </main>

      <aside className="rightside">
      <Agape onHunted={setHunted}/>

      </aside>

   
    </div>
  );
}


export default App;