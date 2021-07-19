import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product'
import ContextShop from '../ContexApi/ContexShop';

function Shop() {
  const { products } = useContext(ContextShop);
    return(
      <>
      <Header />
      <section>
        <div>
          <h2>Shop</h2>
          <select>
            <option hidden> Filter by</option>
            <option> A to Z </option>
            <option> price </option>
          </select>
        </div>

        { products.map((item, index) => <Product key={ index } info={ item }/>) }
      </section>
      <Footer />
      </>
    );
  }
  
  export default Shop;