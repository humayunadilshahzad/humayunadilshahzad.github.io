import React from 'react';
import './project.css';
import GitLinkLogo from'../../images/GitHub-Mark-64px.png';
import WebLinkLogo from'../../images/goto.jpg';
function Project(props) {
  return (
    <div className='project'>
        <h1>{props.title}</h1>
        {/* <h3>{props.pic}</h3> */}
        <img className='appimg' src={props.pic} alt='Pic'></img>
        <div className='links'>
            <a href={props.gitResourceLink} target="_blank" rel="noopener noreferrer" title='view code on git'><img className='linkimg' src={GitLinkLogo} alt='Pic'/></a>
            <a href={props.liveLink} target="_blank" rel="noopener noreferrer" title='Goto webSite'>< img className='linkimg' src={WebLinkLogo} alt='Pic' /></a>
            {/* <button>See Live</button>
            <button>GitHub Code</button> */}
        </div>
    </div>
  );
}
 

export default Project;
