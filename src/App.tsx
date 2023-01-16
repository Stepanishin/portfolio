import React from 'react';
import './assets/normalize.css'
import './assets/reset.css'
import './assets/index.scss'
import HeroPage from './components/HeroPage/HeroPage';
import NavBar from './components/Header/Header';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <Skills />
    </>

  );
}

export default App;
