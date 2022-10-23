import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

class Home extends React.Component { 
  render() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
}

export default Home;


