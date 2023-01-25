import React from 'react';
import photo from '../../img-placeholder.png'
import './About.css'

// type AboutProps = {};

export const About = () => (
    <div className='about-container'>
        <img src={photo} alt="placeholder"/>
        <p>I'm a real person who loves making things for other real people. At work, this is software. At home, this is food, and cocktails, and music!</p>
    </div>
);