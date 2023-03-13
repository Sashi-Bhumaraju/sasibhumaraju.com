import React from 'react';
import Home from './Home'
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import Navbar from './Navbar';
import './Page.css'
function Page () {
    return (
          <div className='Page'>
             <Navbar></Navbar>
            <Home></Home>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
          </div>
    )
}
export default Page;