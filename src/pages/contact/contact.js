import React from 'react';
import './contact.css';
import {FaMailBulk} from "react-icons/fa"

//import NavBar from './components/top_menu/topMenu'

function Contact() {
  return (
    <div className="contactform">
        <h1>Contact Me</h1>
        <img src="" alt="letter Pic"></img>
        <FaMailBulk className='img'/>
        <input></input>
        <input></input>
        <input></input>
        <button>Submit</button>
        
        <h3>Humayun_adil@hotmail.com</h3>
    </div>                                              
  );
}

export default Contact;
