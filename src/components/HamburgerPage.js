import React, { useState, useEffect } from 'react';
import './HamburgerPage.css';
// import Hamburger from 'hamburger-react';
import { Turn as Hamburger } from 'hamburger-react';
import {Link} from 'react-scroll';



function HamburgerPage () {
    
    const [isScrollHam, setisScrollHamed] = useState(false);
    const [toggleSlide, setToggleSlide] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', function() {
            var navbar = document.getElementById('NavBardId');
            var targetElement = document.getElementById('Work');
            var targetPosition = targetElement.getBoundingClientRect().top;
            var navbarHeight = navbar.offsetHeight;
            if (targetPosition < navbarHeight) {
                setisScrollHamed(true)
            } else {
                setisScrollHamed(false);
            }
        });
    },[])

   
    const links =  <div className='HamItems'>

                        <div className={isScrollHam?  'HamItemLight' : 'HamItemDark'  } > <Link  to="/"
                            activeClass="activeHam"
                            spy={true} smooth={true}
                            duration={500}
                              >Home</Link></div>

                        <div className={isScrollHam?  'HamItemLight' : 'HamItemDark'  } > <Link to="About" 
                            
                                activeClass="activeHam"
                                spy={true} smooth={true}
                                duration={500}
                                
                                >About</Link></div>

                        <div  className={isScrollHam?  'HamItemLight' : 'HamItemDark'  } > <Link to="Work"
                                activeClass="activeHam"
                                spy={true} smooth={true}
                                duration={500}
                               
                                >Work</Link></div>

                    </div>    





    return <> <div className={ isScrollHam? 'HamburgerLight' : 'HamburgerDark' }><Hamburger duration={0.1} direction='right' size={30} 
        onToggle={ active => {
            if( active ) {
               console.log("opened");
               setToggleSlide(true);
            } else {
               console.log('closed')
               setToggleSlide(false);
            }
        }}
    ></Hamburger></div> 
    <div   className={ isScrollHam?  toggleSlide? 'slide-in MenuLight' : 'slide-out MenuLight' :  toggleSlide? 'slide-in MenuDark' : 'slide-out MenuDark'   }>
       {links}
    </div>
    </>
}

export default HamburgerPage;