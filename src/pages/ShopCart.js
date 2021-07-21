import React, { useState, useContext } from 'react';
import ContextShop from '../contexApi/ContexShop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function ShopCart() {
    const { cartItens } = useContext(ContextShop);

    if(cartItens === []){
      return <h2> Your cart is empty!</h2>
    } 
    return(
      <>
      <Header />
      <section>
        <h2> Your Shopping Cart</h2>

        {/* { cartItens.map((item) => {
          return (
            <div>
              <img src={ item.img } alt="product img" width="100"/>
              <p> { item.price } </p>
              <div>
                <AiOutlinePlus  onClick={ () => console.log('click')} />
                  1
                <AiOutlineMinus  onClick={ () => console.log('click')} />
              </div>
              <p> total do item </p>
            </div>
          )
        }) } */}



        <p> total do item </p>
        <button type="button"> Checkout </button>
      </section>
      <Footer />
      </>
    );
  }
  
  export default ShopCart;