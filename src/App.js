import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';

function App() {
  const[pageLocation, setPageLocation] = useState("home")
  return (
    <div>
      <Navbar setPageLocation={setPageLocation} hrefLoc={pageLocation}/>
      <div>
        <Main setPageLocation={setPageLocation}/>
        <About setPageLocation={setPageLocation}/>
        <Projects setPageLocation={setPageLocation}/>
        <Contact setPageLocation={setPageLocation}/>
      </div>

    </div>
  );
}

export default App;
