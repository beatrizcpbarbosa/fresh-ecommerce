import React, { useState } from 'react';
import '../css/shop.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product'
// import ContextShop from '../contexApi/ContexShop';
import { productsData } from '../data/ProductsData';

function Shop() {
  // const { products } = useContext(ContextShop);
    const [ productsRender, setProductsRender ] = useState(productsData);
  
    function handleClick(value) {
      if(value === 'Price'){
        const price = productsData.sort((a, b) => {
          return b.price - a.price;
        });
        setProductsRender(price);
      } 
      
      if(value === 'A to Z'){
        const alphabetic = productsData.sort((a, b) => {
          return b - a;
        });
        setProductsRender(alphabetic);
      }

      if(value === 'All'){
        setProductsRender(productsData);
      }
    }

    return(
      <>
      <Header />
      <section>

        <div className="shop-header">
          <h2>Shop</h2>
          <select onClick={(ev) => handleClick(ev.target.value)}>
            <option hidden> Filter by</option>
            <option> Price </option>
            <option> A to Z </option>
            <option> All
               </option>
          </select>
        </div>

        <div className="shop-conteiner">
          { productsRender.map((item, index) => <Product key={ index } info={ item }/>) }
        </div>

      </section>
      <Footer />
      </>
    );
  }
  
  export default Shop;