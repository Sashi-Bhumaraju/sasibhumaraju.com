import React  from 'react';
import './Skills.css';

// import HorizontalScroll from 'react-scroll-horizontal'
// import bulb from '../assets/skill.json';
// import c from '../assets/skill/c.svg';
// import css from '../assets/skill/css.svg';
// import firebase  from '../assets/skill/firebase.svg';
// import git from '../assets/skill/git.svg';
// import html from '../assets/skill/html.svg';
// import java from '../assets/skill/java.svg';
// import js from '../assets/skill/js.svg';
// import mysql from '../assets/skill/mysql.svg';
// import postman from '../assets/skill/postman.svg';
// import dsa from '../assets/skill/dsa.png'
// import react from '../assets/skill/react.svg';
// import spring from '../assets/skill/spring.svg';


  // const icons = [dsa,react,js,html,css,java,spring,mysql,firebase,c,git,postman];
  // const skillName = ['DSA', 'ReactJs','JavaScript','Html','Css','Java','SpringBoot','Mysql','Firebase','C','Git','postman'];

 function Skills () {
   
  const skillsList = [
    <div className='SkillsNamesCardText' style={{color:'#5200a3'}} >DSA</div>,
    <div className='SkillsNamesCardText' style={{color:'#61DBFB'}} >ReactJs</div>,
    <div className='SkillsNamesCardText' style={{color:'#F0DB4F'}} >Java <span style={{color:'#FFFFFF'}}>script</span></div>,
    <div className='SkillsNamesCardText' style={{color:'#e34c26'}} >Html</div>,
    <div className='SkillsNamesCardText' style={{color:'#264de4'}} >CSS</div>,
    <div className='SkillsNamesCardText' style={{color:'orange'}} >Java</div>,
    <div className='SkillsNamesCardText' style={{color:'green'}} >SpringBoot</div>,
    <div className='SkillsNamesCardText' style={{color:'#f29111'}} >My  <span style={{color:' #00758f'}}>sql</span></div>,
    <div className='SkillsNamesCardText' style={{color:'white'}} >Firebase</div>,
    <div className='SkillsNamesCardText' style={{color:'blue'}} >C</div>,
    <div className='SkillsNamesCardText' style={{color:'#F1502F'}} >Git</div>,
    <div className='SkillsNamesCardText' style={{color:'red'}} >Postman</div>,

  ]

    return(
    
        <div className='Skills' id="About">
            
            <div className='SkillsTitle'> About <span className='Me'>Me</span>  and My Expertise  </div>
            <div className='SkillsAboutMe'> As a  passionate  and driven computer science and engineering student with experience in various programming languages and technologies. My passion for  mobile development and interface design started with developing an Android app using  Flutter  and Android Studio. I have honed my problem-solving skills in  data structures and algorithms through online resources. I have also  developed web projects using ReactJS and Java Spring Boot with dynamic and intuitive interfaces. I am a versatile and motivated developer committed to producing  efficient solutions  to complex problems.</div>
            <div  className='SkillsCardList'>
                  {skillsList.map((v,i)=>{
                  //  return <div key={i}  className='SkillsNamesCard' > 
                                
                  //               <img className='SkillsNamesCardImage' src={v.icon}/>  
                  //               <div className='SkillsNamesCardText'> {v.name}</div>
                  //             </div>
                    return <span key={i}>{v}</span>;
                           
                    })}  
                </div>
            <a target="_blank" href='https://drive.google.com/file/d/1wPYck9B2Ajrxx2VYWLVSwuICLXMPp6kp/view?usp=sharing' className='Resume' >Download Resume</a>
      </div>
      
    
    )
 }

 export default Skills;