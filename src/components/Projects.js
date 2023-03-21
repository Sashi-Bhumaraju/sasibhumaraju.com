import {React, useState} from 'react';
import './Projects.css';
import eRight from '../assets/exploreright.svg';
import Data from '../Data/Data'

// import a from '../assets/projects/botanica.png';
// import b from '../assets/projects/guarage.jpg';
// import c from '../assets/projects/lights.png';
// import d from '../assets/projects/pokeman.png';
// import e from '../assets/projects/roll.png';
// import f from '../assets/projects/silpa.png';
// import g from '../assets/projects/sorting.png';
//  const projectImages = [f,a,g,c,d,b];

 function Projects () {


    const [isExpanded, setIsExpanded] = useState( [false,false,false,false,false,false] );

    const toggleExpandIt = (i) => {
        isExpanded[i] = !isExpanded[i]
        // console.log(isExpanded)
        var newList = [...isExpanded ]
      setIsExpanded(newList);
    };

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
                                
                                <div  className= {isExpanded[i]? 'expanded ProjectDescription' : 'ProjectDescription'}> {project.description}
                                <span className='viewMode' onClick={ ()=>toggleExpandIt(i) } > {isExpanded[i]? 'see less' : ' ... see more'} </span>
                                 </div>
                               
                        {/* </div> */}
                        <div className='ProjectCardButtons'>
                            <a target="_blank" rel="noreferrer"  href={project.git} className='Git'> GitHub </a>
                            <a target="_blank" rel="noreferrer"  href={project.live}  className='Explore'> Explore <img alt='live' className='ExploreIcon' src={eRight}></img> </a>
                        </div>
                        
                    </div>
                    <img alt={project.name} className='ProjectsImage' src={project.image}></img>
                 </div>
                 })
                 }
                
            </div>

            <a target="_blank" rel="noreferrer" href='https://github.com/sasibhumaraju?tab=repositories' className='SeeMore'> See More ...  </a>
           
        </div>
    )
 }
 export default Projects;