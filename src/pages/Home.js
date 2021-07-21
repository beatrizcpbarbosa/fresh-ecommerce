import React from 'react';
import '../css/home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import girl1 from '../imgs/girl1.jpg';
import CarrosselOpnion from '../components/CarrosselOpnion';

function Home() {
    return(
      <section>
        <Header />
        <div className="imgcover">
          <img src={girl1} alt="homepage" />
        </div>
        
        <div className="paralex" />

        <CarrosselOpnion />

        <Footer />
        
      </section>
    );
  }
  
  export default Home;