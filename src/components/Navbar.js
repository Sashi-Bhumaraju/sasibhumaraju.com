import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import tick from '../assets/tick.svg';
function Navbar () {
    const NavinkCSS = ({isActive}) => {
           return {
            color : isActive? 'green' : 'black'
           }
    }
    return (
        <div className='Navbar' style={{}}>
            <div className='NameTitle'>
                <h2>Sasi Bhumaraju
                     <img className='Tick' width={50} src={tick}></img>
                     </h2>
            </div>
           
            <div className='NavItems'>

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

            <div className='Resume'>Resume</div>
        </div>
    )
}

export default Navbar;