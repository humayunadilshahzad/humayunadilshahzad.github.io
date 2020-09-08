import React from 'react';
import './qualification.component.css';

function Qualification(props){
return(
    <div className='qualification-wrapper'>
            <div className='qualification'>
                {/* <h1>Title: {props.title}</h1> */}
                <h3>{props.title}</h3>
                <hr></hr>
                <h5>Institute: {props.institute}</h5>
                <h5>Majors: {props.majors}</h5>
                <h5>Term: {props.yearPassed}</h5>
            </div>
    </div>
)

}

export default Qualification;