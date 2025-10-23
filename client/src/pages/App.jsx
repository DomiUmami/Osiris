import React from 'react';
import '../styles/App.css';
/*import { useHistory } from 'react-router-dom';*/

import Header from "../components/header.jsx";
import Footer from '../components/footer.jsx';

import "../styles/Header.css"
import "../styles/Layout.css"
import "../styles/Contact.css"
import "../styles/Cards.css"
import "../styles/Well.css"

function App() {

  
  return (
    <div className="grid-container">
      <Header></Header>

      <aside className="sidebar">
      <p className='project-card'>Something clever</p>
      <p className='project-card'>Something clever</p>
      <p className='project-card'>Something clever</p>
      <p className='project-card'>Something clever</p>
      <p className='project-card'>Something clever</p>
      <p className='project-card'>Something clever</p>
      </aside>

      <main className="main">
    
    
        <text className='project-card'>
       "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
  </text>
        <p className='card-description'>
       "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
  </p>
        <text className='project-card'>
       "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
  </text>
        <p className='card-description'>
       "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
  </p>
        <text className='project-card'>
       "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
  </text>
        <p className='card-description'>
       "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
  </p>
  
       
      </main>

      <aside className="rightside">
    
      </aside>

      <Footer></Footer>
    </div>
  );
}

export default App;