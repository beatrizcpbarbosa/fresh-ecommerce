import React, { useEffect, useState } from 'react';
import '../css/shop.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product'
// import ContextShop from '../contexApi/ContexShop';
import { productsData } from '../data/ProductsData';

function Shop() {
    const [ products, setProducts ] = useState(productsData);
    const [ value, setValue ] = useState('');
  
    useEffect(() => {
      if(value === 'Price'){
        const price = productsData.sort((a, b) => {
          return b.price - a.price;
        });
        console.log(price);
        setProducts(price);
      } 
      
      if(value === 'A to Z'){
        const alphabetic = productsData.sort();
        console.log(alphabetic);
        setProducts(alphabetic);
      }

      if(value === 'All'){
        console.log(productsData);
        setProducts(productsData);
      }
    }, [value, products]);

    // let products = productsData;
  
    // if(value === 'Price'){
    //   const price = productsData.sort((a, b) => {
    //     return b.price - a.price;
    //   });
    //   console.log(price);
    //   products = price;
    //   setProducts(price);
    // } 
    
    // if(value === 'A to Z'){
    //   const alphabetic = productsData.sort();
    //   console.log(alphabetic);
    //   // products = alphabetic;
    //   setProducts(alphabetic);
    // }

    // if(value === 'All'){
    //   console.log(productsData);
    //   setProducts(productsData);
    //   // products = productsData;
    // }
   
    

    return(
      <>
      <Header />
      <section>

        <div className="shop-header">
          <h2>Shop</h2>
          <select onClick={(ev) => setValue(ev.target.value)}>
            <option hidden> Filter by</option>
            <option> A to Z </option>
            <option> Price </option>
            <option> All
               </option>
          </select>
        </div>

        <div className="shop-conteiner">
          { products.map((item, index) => <Product key={ index } info={ item }/>) }
        </div>

      </section>
      <Footer />
      </>
    );
  }
  
  export default Shop;