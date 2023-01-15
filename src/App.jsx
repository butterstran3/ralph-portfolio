import React from 'react';
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio';
import About from './components/About'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
