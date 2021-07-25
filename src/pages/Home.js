import React from 'react';
import '../css/home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutFresh from '../components/AboutFresh';
import CarrosselOpnion from '../components/CarrosselOpnion';
import Product from '../components/Product'
import { productsData } from '../data/ProductsData';

function Home() {
    const filter = productsData.filter((item) => item.status === 'new');
    return(
      <section>
        <Header />

        <div className="imgcover"></div>

        <h2 className="home-title">New Products</h2>
        <div className="shop-conteiner">
          { filter.map((item, index) => <Product key={ index } info={ item }/>) }
        </div>

        <h2 className="home-title">About Fresh</h2>
        <AboutFresh />

        <div className="paralex" />

        <h2 className="home-title">Your Opinion Matters</h2>
        <CarrosselOpnion />

        <Footer />
        
      </section>
    );
  }
  
  export default Home;