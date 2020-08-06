import React from 'react';
import './topMenu.css';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav className='color'>
        <div className='logo'>
          <h3>Humayun</h3>
        </div>      
        <ul className="navlinks">
          
          <Link to ='/about'>
            <li> About</li>
          </Link>

          <Link to ='/projects'>
            <li> Projects</li>
          </Link>

          <Link to ='/qualification'>
            <li> Qualification</li>
          </Link>

          <Link to ='/leasure'>
            <li> Leasure</li>
          </Link>

          <Link to ='/contact'>
            <li> Contact</li>
          </Link>

        </ul> 
      </nav>
    </div>
  );
}

export default NavBar;


{/* <a 
href="https://reactjs.org"
>
  About
</a>

<a        
href="https://reactjs.org"
>
  Projects
</a>
<a
  href="https://reactjs.org"
>
  Contact
</a> */}

{/* <a 
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  About
</a> */}