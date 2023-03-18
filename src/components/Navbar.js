import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import tick from '../assets/tick.svg';
import {Link} from 'react-scroll';
function Navbar () {
  

    const [isScroll, setIsScrolled] = useState(true);

    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);

    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
  
    // const handleScroll = () => {
    //   const position = window.pageYOffset;
    //   if (position > 2*window.innerHeight) {
    //     setIsScrolled(true);
    //   } else {
    //     setIsScrolled(false);
    //   }
    // };
  

function activateNavLink  (position)  {
     switch(position) {
        case 1: setItem1(true);
                setItem2(false);
                setItem3(false);
                break;
        case 2: setItem1(false);
                setItem2(true);
                setItem3(false);
                break;
        case 3: setItem1(false);
                setItem2(false);
                setItem3(true);
                break;        
     }
}

useEffect(()=>{
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('NavBardId');
        var targetElement = document.getElementById('Work');
        var targetPosition = targetElement.getBoundingClientRect().top;
        var navbarHeight = navbar.offsetHeight;
        if (targetPosition < navbarHeight) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false);
        }
      });
},[])

const links =  <div  id='nav' className='NavItems'>

<div > <Link  to="/"
       activeClass="active"
       spy={true} smooth={true}
    //    offset={80}
       duration={500}
        >Home</Link></div>

 <div  > <Link to="About" 
       
        activeClass="active"
        // offset={70}
        spy={true} smooth={true}
        duration={500}
        >About</Link></div>

<div > <Link to="Work"
        activeClass="active"
        // offset={60}
        spy={true} smooth={true}
        duration={500}
        >Work</Link></div>
</div>    


const links2 =  <div className='NavItems2'>

<div className='Navitem'> <NavLink  to="/"
        className={({isActive})=>{
            return (isActive)? 'active' : 'notActive'
        }}
        >Home</NavLink></div>

 <div className='Navitem' > <NavLink to="/About"
        className={({isActive})=>{
            return (isActive)? 'active' : 'notActive'
        }}
        >About</NavLink></div>

<div className='Navitem'> <NavLink to="/Work"
         className={({isActive})=>{
            return (isActive)? 'active' : 'notActive'
        }}
        >Work</NavLink></div>
</div> 
    return (
      
        <div className={isScroll? 'NavbarWork' : 'Navbar' }id='NavBardId' style={{}}>
             <div className={ 'NavBarBox' } >
            <div className='NavTitle'>
                Sasi Bhumaraju
                     <img className='Tick' width={50} src={tick}></img>
                     
            </div>
           
                 {links}

            {/* <div className='Resume'>Resume</div> */}
            </div> 
            {links2}
        </div>
       
       
    )
}

export default Navbar;