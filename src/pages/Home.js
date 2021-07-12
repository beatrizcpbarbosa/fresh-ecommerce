import React from 'react';
import '../css/home.css'
import Header from '../components/Header';
import girl1 from '../imgs/girl1.jpg';
import orange from '../imgs/oranges.jpg';

function Home() {
    return(
      <section>
        <Header />
        <div className="imgcover">
          <img src={girl1} alt="homepage" />
        </div>
        
        <div className="paralex" />
        
      </section>
    );
  }
  
  export default Home;