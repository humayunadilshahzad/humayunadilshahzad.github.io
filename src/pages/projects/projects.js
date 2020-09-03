import React from 'react';
import './projects.css';
import Project from '../../components/project/project';
import SeasoneyAppPic from '../../images/seasonyApp1.png';
import weatherAppPic from '../../images/weatherApp.png';
import giffyAppPic from '../../images/giffyApp.png';
import circlesAppPic from '../../images/circles.png';


// this "proj" const array of objects will later be replaced by API call  
const proj =[ 
    {title:'Seasoney',
    pic:SeasoneyAppPic,
    githubSourceLink:'https://github.com/HackYourFuture-CPH/FP-class11',
    webLink:'https://fp-class11.herokuapp.com/dashboard'},

    {title:'Meal Sharing',
    pic:'Meal Sharing pic path',
    githubSourceLink:'https://github.com/humayunadilshahzad/meals-sharing',
    webLink:'#'},
    
    {title:'Color full Circles',
    pic:circlesAppPic,
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week3/cirles',
    webLink:'http://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week3/cirles/index.html'},
    
    {title:'Weather App',
    pic:weatherAppPic,
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week1/weather%20app',
    webLink:'https://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week1/weather%20app/index.html'},
    
    {title:'Giffy App',
    pic:giffyAppPic,
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week1/giphy%20app',
    webLink:'https://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week1/giphy%20app/index.html'},
    
    {title:'Weather App',
    pic:weatherAppPic,
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week1/weather%20app',
    webLink:'https://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week1/weather%20app/index.html'},
    
  ]

function Projects() {
  return (
      <div className='projects'>   
        {proj.map(p=> 
            <Project  title={p.title} pic={p.pic} gitResourceLink={p.githubSourceLink} liveLink={p.webLink}/>
        )} 
    </div>
  );
}


export default Projects;
