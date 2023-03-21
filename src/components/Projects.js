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

import Data from '../Data/Data'

const projectImages = [f,a,g,c,d,b];

 function Projects () {
    return(
        <div className='Projects' id="Work">
            <div className='ProjectsHeading'>My Works </div>
            <div className='ProjectsSubHeading'> These are Web and Backend applications using a combination of ReactJS, Spring Boot, and JavaScript. My projects are designed to be efficient, user-friendly, and scalable, utilizing the latest tools and technologies to create responsive and interactive web applications.  </div>
            <div className='ProjectsList'>
                 {Data.map((project,i)=>{
                    return  <div className="ProjectCard" key={i} >
                    <div className='ProjectCardText' >
                        <div className='ProjectName'> {project.name} </div>
                        {/* <div className='ProjectContent'> */}
                                
                                <div className='ProjectDescription'> {project.description} </div>
                               
                        {/* </div> */}
                        <div className='ProjectCardButtons'>
                            <a target="_blank"  href={project.git} className='Git'> GitHub </a>
                            <a target="_blank"  href={project.live}  className='Explore'> Explore <img className='ExploreIcon' src={eRight}></img> </a>
                        </div>
                        
                    </div>
                    <img className='ProjectsImage' src={project.image}></img>
                 </div>
                 })
                 }
                
            </div>

            <a target="_blank" href='https://github.com/sasibhumaraju?tab=repositories' className='SeeMore'> See More ...  </a>
           
        </div>
    )
 }
 export default Projects;