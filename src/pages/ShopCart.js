import React, { useState, useContext } from 'react';
import ContextShop from '../contexApi/ContexShop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function ShopCart() {
    const { cartItens, productsAmout, increment, decrement,
    removeCart, getTotal, } = useContext(ContextShop);

    if(cartItens === []){
      return <h2> Your cart is empty!</h2>
    } 
    return(
      <>
      <Header />
      <section>
        <h2> Your Shopping Cart</h2>

        { cartItens.map((item) => {
          const { id } = item;
          const amout = productsAmout.find((object) => object[id]);
          return (
            <div>
              <img src={ item.img } alt="product img" width="100"/>
              <p> { item.price } </p>
              <div>
                <AiOutlinePlus  onClick={() => increment(item)} />
                  { amout[id] }
                <AiOutlineMinus  onClick={() => decrement(item)} />
              </div>
              <p> total do item </p>
              <button type="button" onClick={ () => removeCart(item)}>remove</button>
            </div>
          )
        }) }



        <p> total </p>
        <button type="button"> Checkout </button>
      </section>
      <Footer />
      </>
    );
  }
  
  export default ShopCart;