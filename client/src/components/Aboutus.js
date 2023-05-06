import React from 'react';
import Nav from './Nav'
import aboutus from '../assets/ABOUTUS.png'

import './about.css'
export default function Aboutus() {
    return (

      <div>
        <Nav/>
        <div className='imgab'>
        <img src={aboutus}></img>
        </div>
        <br></br>
        <div className='about-1'>
            <span>
            We are an artist, booking, event and festival management company all rolled into one. With a history of working with both local and international clients for almost a decade, we have developed a reputation as India’s premier agency in the independent music industry, with a worldwide reach. By managing some of the biggest artists in the country and having worked on the most reputed festivals and events, we bring unparalleled service and proficiency to the table. Through our event management wing, we also specialize in curating and managing custom-designed programmes for colleges, corporates and clubs.
            </span>
        </div>

      </div>
    );
  }