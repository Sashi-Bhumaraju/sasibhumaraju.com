import React, { useState, useEffect } from 'react';
import './Navbar.css';
import tick from '../assets/tick.svg';
import {Link} from 'react-scroll';
import HamburgerPage from './HamburgerPage';
// import { NavLink } from 'react-router-dom';
// import moon from '../assets/skill/moon.png';
// import sun from '../assets/skill/sun.png';


function Navbar () {
  

    const [isScroll, setIsScrolled] = useState(false);



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


    return (
      
        <div className={isScroll? 'NavbarWork' : 'Navbar' }id='NavBardId' style={{}}>
             <div className={ 'NavBarBox' } >
            <div className='NavTitle'>
                Sasi Bhumaraju
                   <span className='TickContainer'>  <img alt='verify' className='Tick' width={50} src={isScroll? tick : tick}></img> </span>
                     
            </div>
           
                 {links}

                 <span className='Ham'><HamburgerPage></HamburgerPage></span>

            {/* <div className='Resume'>Resume</div> */}
            </div> 
          
        </div>
       
       
    )
}

export default Navbar;