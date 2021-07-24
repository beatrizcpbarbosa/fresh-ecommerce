import React from 'react';
import '../css/home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutFresh from '../components/AboutFresh';
import girl1 from '../imgs/girl1.jpg';
import CarrosselOpnion from '../components/CarrosselOpnion';

function Home() {
    return(
      <section>
        <Header />

        <div className="imgcover"></div>
        
        <AboutFresh />

        <div className="paralex" />

        <CarrosselOpnion />

        <Footer />
        
      </section>
    );
  }
  
  export default Home;