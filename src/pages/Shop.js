import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product'
import { productsData } from '../data/ProductsData'

function Shop() {
  console.log( productsData);
    return(
      <>
      <Header />
      <section>
        <div>
          <h2>Shop</h2>
          <select>
            <option></option>
          </select>
        </div>

        { productsData.map((item, index) => <Product key={ index } info={ item }/>) }
      </section>
      <Footer />
      </>
    );
  }
  
  export default Shop;