import React from 'react';
import Page from './components/Page';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import HamburgerPage from './components/HamburgerPage';

function App() {
  return (
    <div className="App">
            <Navbar></Navbar>
            <Home></Home>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
    </div>
  );
}

export default App;
