import React, { useEffect, useRef } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import './Skills.css';
import bulb from '../assets/skill.json';
import c from '../assets/skill/c.svg';
import css from '../assets/skill/css.svg';
import firebase  from '../assets/skill/firebase.svg';
import git from '../assets/skill/git.svg';
import html from '../assets/skill/html.svg';
import java from '../assets/skill/java.svg';
import js from '../assets/skill/js.svg';
import mysql from '../assets/skill/mysql.svg';
// import postman from '../assets/skill/postman.svg';
import react from '../assets/skill/react.svg';
import spring from '../assets/skill/spring.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';

  const icons = [react,js,html,css,"-",java,spring,mysql,firebase,"-",c,git]
  const skillName = ['React','Js','Html','Css','-','Java','SpringBoot','Mysql','Firebase','-','C','Git'];
  const cardData = icons.map((v,i)=>{
    return { "icon" : v, "name" : skillName[i] };
  })

 function Skills () {
   

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bulb,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice"
    // }
  };

  function leftScroll () {
     var slider = document.getElementById('Slider');
     slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
  }

  function rightScroll () {
    var slider = document.getElementById('Slider');
    slider.scrollLeft = slider.scrollLeft +  slider.offsetWidth;
  }

  

  const child   = { width: `30em`, height: `100px`}
  

  
    return(
        <div className='Skills'>
            <div className='SkillsTitle'> About Me and My Skills  </div>
            <div className='SkillsAboutMe'> As a <b> passionate </b> and driven computer science and engineering student with experience in various <b>programming languages and technologies.</b> My passion for <b> mobile development</b> and interface design started with developing an Android app using <b> Flutter </b> and <b>Android Studio.</b> I have honed my problem-solving skills in <b> data structures and algorithms</b> through online resources. I have also <b> developed</b> web projects using <b>React JS </b>and <b>Java Spring Boot </b>with dynamic and intuitive interfaces. I am a versatile and motivated developer committed to producing <b> efficient solutions </b> to complex problems.</div>

            <div className='SkillsNames' >
              <img className='arrow' src={left} onClick={leftScroll}></img>
               <div id="Slider" className='SkillsCardList'>
                  {cardData.map((v,i)=>{
                    if(v.icon === "-") return <div key={i} className='EmptyBox'>  </div>
                    else return <div key={i}  className='SkillsNamesCard' > 
                                <img className='SkillsNamesCardImage' src={v.icon}/>  
                                <div className='SkillsNamesCardText'> {v.name}</div>
                              </div>
                    })}  
                </div>
              <img className='arrow' src={right} onClick={rightScroll}></img>         
           </div>
      </div>
    )
 }
 export default Skills;