import React from 'react';
import './Projects.css';
import a from '../assets/projects/botanica.png';
import b from '../assets/projects/guarage.jpg';
import c from '../assets/projects/lights.png';
import d from '../assets/projects/pokeman.png';
// import e from '../assets/projects/roll.png';
import f from '../assets/projects/silpa.png';
import g from '../assets/projects/sorting.png';
import eRight from '../assets/exploreright.svg';

const projectImages = [f,a,g,c,d,b];

 function Projects () {
    return(
        <div className='Projects'>
            <div className='ProjectsHeading'>My <span style={{color:"#000000"}}>Works</span> </div>
            <div className='ProjectsSubHeading'> These are Web and Backend applications using a combination of ReactJS, Spring Boot, and JavaScript. My projects are designed to be efficient, user-friendly, and scalable, utilizing the latest tools and technologies to create responsive and interactive web applications.  </div>
            <div className='ProjectsList'>
                 {projectImages.map((image)=>{
                    return  <div className="ProjectCard">
                    <div className='ProjectCardText'>
                        <div className='ProjectName'> Botanica </div>
                        <div className='ProjectDescription'> A real estate website is a platform where users can search for properties and connect with real estate agents. The website should have features such as property listings, search filters, agent profiles, and contact forms. </div>
                        <div className='ProjectCardButtons'>
                            <div className='Git'> GitHub </div>
                            <div className='Explore'> Explore <img className='ExploreIcon' src={eRight}></img> </div>
                        </div>
                    </div>
                    <img className='ProjectsImage' src={image}></img>
                 </div>
                 })
                 }
                
            </div>
           
        </div>
    )
 }
 export default Projects;