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

const links =  <div className='NavItems'>

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
      
        <div className='Navbar' style={{}}>
             <div className='NavBarBox' >
            <div className='NavTitle'>
                Sasi Bhumaraju
                     <img className='Tick' width={50} src={tick}></img>
                     
            </div>
           
                 {links}

            <div className='Resume'>Resume</div>
            </div> 
            {links2}
        </div>
       
       
    )
}

export default Navbar;