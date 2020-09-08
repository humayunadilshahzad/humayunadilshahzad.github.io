import React from 'react';
import './about.css';
import myPic from '../../images/mealSharing.jpg'

function About() {
  return (
    <div className='abc'>
      <div className='textabout'>
        <h3>About me</h3>
        <h6>I'm Humayun, a Full Stack Web Developer</h6>
        <p className='alignleft'>I am a Software Developer based in Denmark. I have developed an academic and some hobby projects recently. I have worked with several tech stacks and particularly excels in JavaScript, React, Node JS, HTML, CSS and MySql.</p>
        <p className='alignleft'>I have been contributing to open source projects to learn new development techniques and deepen my knowledge in Full-stack domain. I am looking to discover new ﬁelds in the domain of tech and development.</p>
        <p className='alignleft'>Just take a look at my portfolio work and lets see if we can work together on your next project.</p>
        <hr></hr>

      </div>
      <img src={myPic} alt='Pic'></img>
    </div>
  );
}

export default About;
