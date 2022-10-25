import React from 'react';
import '../src/components.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Pages from './components/Pages/Pages';
import Services from './components/Services/Services';


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Pages />
      <Services/>
    </>
  );
};
export default App;