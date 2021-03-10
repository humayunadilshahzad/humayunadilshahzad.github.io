import React from 'react';
import {FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa"
import './footer.css'
//import { icons } from 'react-icons';
function Footer(){
    return(
        <div className='foot'>
            <a className='linkstyle'  href='https://www.linkedin.com/in/humayun-adil-21771071/' target="blank" ><FaLinkedin/> linkedIn</a>
            <a className='linkstyle' href='https://github.com/humayunadilshahzad' target="blank"><FaGithub/> Github</a>
            <a className='linkstyle' href='https://www.facebook.com/humayun.adil' target="blank"><FaFacebook/> facebook</a>
            
        </div>
    )
}
export default Footer;