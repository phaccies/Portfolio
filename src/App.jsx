import './App.css';
import React, { useRef } from 'react';
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';

function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ introRef, aboutRef, expRef, projectsRef }}
      />
      <div ref={introRef}>
        <Intro />
        <Card />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={expRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </>
  );
}

export default App;
