import Home from './components/Home'
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
     
     
      <Projects></Projects>
    </div>
  );
}

export default App;
