import React from 'react';
import './projects.css';
import Project from '../../components/project/project';
import SeasoneyAppPic from '../../images/seasonyApp1.png';
import weatherAppPic from '../../images/weatherApp.png';
import giffyAppPic from '../../images/giffyApp.png';
import circlesAppPic from '../../images/circles.png';
import mealSharing from '../../images/mealSharing.jpg'


// this "proj" const array of objects will later be replaced by API call  
const proj =[ 
    {title:'Seasoney',
    pic:SeasoneyAppPic,
    about:'This App is made for Seasony vertical formingThis App is made for Seasony vertical formingThis App is made for Seasony vertical forming',
    skills:['html','css','js','react','node','figma','Mysql','knex'],
    githubSourceLink:'https://github.com/HackYourFuture-CPH/FP-class11',
    webLink:'https://fp-class11.herokuapp.com/dashboard'},

    {title:'Meal Sharing',
    pic:mealSharing,
    about:'This App is made for Seasony vertical formingThis App is made for Seasony vertical formingThis App is made for Seasony vertical forming',
    skills:['html','css','js','react','node','figma','Mysql','knex'],
    githubSourceLink:'https://github.com/humayunadilshahzad/meals-sharing',
    webLink:'#'},
    
    {title:'Colorful Circles',
    pic:circlesAppPic,
    about:'This App is made for Seasony vertical formingThis App is made for Seasony vertical formingThis App is made for Seasony vertical forming',
    skills:['html','css','js','react','node','figma','Mysql','knex'],
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week3/cirles',
    webLink:'http://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week3/cirles/index.html'},
    
    {title:'Weather App',
    pic:weatherAppPic,
    about:'This App is made for Seasony vertical formingThis App is made for Seasony vertical formingThis App is made for Seasony vertical forming',
    skills:['html','css','js','react','node','figma','Mysql','knex'],
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week1/weather%20app',
    webLink:'https://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week1/weather%20app/index.html'},
    
    {title:'Giffy App',
    pic:giffyAppPic,
    about:'This App is made for Seasony vertical formingThis App is made for Seasony vertical formingThis App is made for Seasony vertical forming',
    skills:['html','css','js','react','node','figma','Mysql','knex'],
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week1/giphy%20app',
    webLink:'https://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week1/giphy%20app/index.html'},
    
    {title:'Weather App',
    pic:weatherAppPic,
    about:'This App is made for Seasony vertical formingThis App is made for Seasony vertical formingThis App is made for Seasony vertical forming',
    skills:['html','css','js','react','node','figma','Mysql','knex'],
    githubSourceLink:'https://github.com/humayunadilshahzad/hyf-homework/tree/master/javascript/javascript3/week1/weather%20app',
    webLink:'https://htmlpreview.github.io/?https://github.com/humayunadilshahzad/hyf-homework/blob/master/javascript/javascript3/week1/weather%20app/index.html'},
    
  ]

function Projects() {
  return (
      <div className='projects'>   



        {proj.map(p=> 
          <div className='card-container'>
            <div className='card'>
              
                  <figure className='front'>
                    <Project  title={p.title} pic={p.pic} gitResourceLink={p.githubSourceLink} liveLink={p.webLink} about={p.about}/>
                  </figure>

                  <figure className='back'>
                     <h5>Back</h5>
                  </figure>

            </div>
          </div>
        )} 
    </div>
  );
}


export default Projects;


//ORIGINAL WORKINF COMPONENT CAN BE COPY PASTED BACK JUST IN CASE

// function Projects() {
//   return (
//       <div className='projects'>   
//         {proj.map(p=> 
//             <Project  title={p.title} pic={p.pic} gitResourceLink={p.githubSourceLink} liveLink={p.webLink} about={p.about}/>
//         )} 
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////


    // <div className='projects'>   
    
    //     <div  className='container'>
    //         <div className='card'>
    //           {
    //           proj.map(p=> 
    //           <Project className='front' title={p.title} pic={p.pic} gitResourceLink={p.githubSourceLink} liveLink={p.webLink} about={p.about}/>
    //           )} 
    //         </div>
    //         <div className='back'>Back</div>
    //     </div>

 
    // </div>


    
//     <div className='projects'>   

//     <div className='container'>
//         <div className='card'>
//            <div className='front'></div>
//            <div className='back'></div>
//         </div>
//     </div>

//     {proj.map(p=> 
//         <Project  title={p.title} pic={p.pic} gitResourceLink={p.githubSourceLink} liveLink={p.webLink} about={p.about}/>
//     )} 
// </div>