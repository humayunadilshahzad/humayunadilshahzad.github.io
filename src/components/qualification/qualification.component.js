import React from 'react';
import './qualification.component.css';

function Qualification(props){
return(
    <div className='qualification-wrapper'>
            <div className='qualification'>
                {/* <h1>Title: {props.title}</h1> */}
                <h3>{props.title}</h3>
                <hr></hr>
                <p className='qualif-detail'>Institute: {props.institute}</p>
                <p className='qualif-detail'>Majors: {props.majors}</p>
                <p className='qualif-detail'>Term: {props.yearPassed}</p>
            </div>
    </div>
)

}

export default Qualification;