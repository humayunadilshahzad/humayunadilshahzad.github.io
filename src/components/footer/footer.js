import React from 'react';
import {FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa"
import './footer.css'
//import { icons } from 'react-icons';
function Footer(){
    return(
        <div className='foot'>
            <div className='socialmedialinks'>
            <a className='linkstyle'  href='https://www.linkedin.com/in/humayun-adil-21771071/' target="blank" >< FaLinkedin/> </a>
            <a className='linkstyle' href='https://github.com/humayunadilshahzad' target="blank"><FaGithub/> </a>
            <a className='linkstyle' href='https://www.facebook.com/humayun.adil' target="blank"><FaFacebook/> </a>
            </div>
        </div>
    )
}
export default Footer;