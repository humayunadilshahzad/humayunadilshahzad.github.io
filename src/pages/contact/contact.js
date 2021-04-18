import React from 'react';
import './contact.css';
// import { FaMailBulk } from "react-icons/fa"
// import contact from '../../images/message-64.png';
import contact from '../../images/msg.png';



//import NavBar from './components/top_menu/topMenu'

function Contact() {
  return (
    <div className="contactform">
      <h1>Contact Me</h1>
      <div className='twocoloumndiv'>
        <div className='left-pannel'>
          {/* <FaMailBulk className='img' /> */}
          <img  className='img-cont' src={contact} alt="letter Pic" ></img>
        </div>
        <div className='contactform-right'>
          <input className='cont-txtbox'></input>
          <input className='cont-txtbox'></input>
          <input className='cont-txtbox'></input>
          <button className='cont-sub-btn'>Submit</button>
        </div>
      </div>
      <h3>Humayun_adil@hotmail.com</h3>
    </div>
  );
}

export default Contact;
