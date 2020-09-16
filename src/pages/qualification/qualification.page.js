import React from 'react';
import './qualification.css';
import Qualif from '../../components/qualification/qualification.component'

const qlf =[
  {institue:'Kingston University London',
  title:'Master in Network and Information Security',
  majors:'Network Design, Network Security, TCP/IP, Web Technologies',
  year:'Sep 2009 - Sep 2010'},

  {institue:'Al-Khair University AJK',
  title:'Master in Computer Science',
  majors:'Computer Science',
  year:'Sep 2002 - Aug 2004'},

  {institue:'Al-Khair University AJK',
  title:'Batcholer in Computer Science',
  majors:'Computer Science',
  year:'Sep 1996 - Aug 1998'},

  {institue:'University of Punjab Lahore',
  title:'Betcholer in Science',
  majors:'Mathematics ,  Statistics , Echonomics',
  year:'Sep 1994 - Aug 1996'},
]


function Qualifications() {
  return (
    <div>
        { qlf.map(qualifq=>
          <Qualif title={qualifq.title} institute={qualifq.institue} majors={qualifq.majors} yearPassed={qualifq.year}/>
        )}
    </div>
  );
}

export default Qualifications;
