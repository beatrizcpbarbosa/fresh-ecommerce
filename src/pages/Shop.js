import React from 'react';
import '../css/shop.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product'
// import ContextShop from '../contexApi/ContexShop';
import { productsData } from '../data/ProductsData';

function Shop() {
  // const { products } = useContext(ContextShop);
    return(
      <>
      <Header />
      <section>

        <div className="shop-header">
          <h2>Shop</h2>
          <select>
            <option hidden> Filter by</option>
            <option> A to Z </option>
            <option> price </option>
          </select>
        </div>

        <div className="shop-conteiner">
          { productsData.map((item, index) => <Product key={ index } info={ item }/>) }
        </div>

      </section>
      <Footer />
      </>
    );
  }
  
  export default Shop;