import React from 'react'
import './links.component.css'

import GitLinkLogo from'../../images/GitHub-Mark-64px.png';
import WebLinkLogo from'../../images/goto.jpg';

function Links(props){
    return(
        <div className='links-component'>

            {/* {props.link} */}
             {/* <div className='links'> */}

            <a href={props.gitResourceLink} target="_blank" rel="noopener noreferrer" title='view code on git'>
                <img className='linkimg' src={GitLinkLogo} alt='Pic'/>
            </a>

            <a href={props.liveLink} target="_blank" rel="noopener noreferrer" title='Goto webSite'>
                < img className='linkimg' src={WebLinkLogo} alt='Pic' />
            </a>

            {/* </div> */}

        </div>
    )
}

export default Links


// import './project.css';
// import GitLinkLogo from'../../images/GitHub-Mark-64px.png';
// import WebLinkLogo from'../../images/goto.jpg';
// function Project(props) {
//   return (
//     <div className='project'>
//         <h2>{props.title}</h2>

//             <img className='appimg' src={props.pic} alt='Pic'></img>
//         <p>{props.about}</p>
//     <div className='links'>
//             <a href={props.gitResourceLink} target="_blank" rel="noopener noreferrer" title='view code on git'><img className='linkimg' src={GitLinkLogo} alt='Pic'/></a>
//             <a href={props.liveLink} target="_blank" rel="noopener noreferrer" title='Goto webSite'>< img className='linkimg' src={WebLinkLogo} alt='Pic' /></a>
//                 </div>
//     </div>
//   );
// }
