import React from 'react';
import './about.css';
import myPic from '../../images/mealSharing.jpg'

function About() {
  return (
    <div className='abc'>
      <div className='textabout'>
        <h3>About</h3>
        <p className='alignleft'>This is about me.This is about me.This is about me.
              This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.
          This is about me.</p>
              <p className='alignleft'>This is about me.This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
          This is about me.This is about me.This is about me.This is about me.
          </p>

      </div>
      <img src={myPic} alt='Pic'></img>
    </div>
  );
}

export default About;
