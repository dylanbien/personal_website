import React from 'react';
import './App.css';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Element } from 'react-scroll';
import { ExperienceContainer } from './components/experience';
import { AboutContainer } from './components/about';
import { ProjectContainer } from './components/projects';
const App: React.FC = () => {
  return (
    <div>
      <Element name="home">
      </Element>
      <Header />
      <Element name="about">
        <AboutContainer/>
      </Element>
      <Element name="experience">
        <ExperienceContainer/>
      </Element>
      <Element name="projects">
        <ProjectContainer/>
      </Element>
      <Element name="more">
        <Footer />
      </Element>
    </div>
  );
};

export default App;