import React, { useContext } from 'react';
import ContextShop from '../contexApi/ContexShop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function ShopCart() {
    const { cartItens, productsAmout, increment, decrement,
    removeCart, cartTotal } = useContext(ContextShop);

    if(cartItens === []){
      return <h2> Your cart is empty!</h2>
    } 
    return(
      <>
      <Header />
      <section>
        <h2> Your Shopping Cart</h2>

        { cartItens.map((item) => {
          const { id, img, price } = item;
          const amout = productsAmout.find((object) => object[id]);
          return (
            <div>
              <img src={ img } alt="product img" width="100"/>
              <p> { price } </p>
              <div>
                <AiOutlinePlus  onClick={() => increment(item)} />
                  { amout[id] }
                <AiOutlineMinus  onClick={() => decrement(item)} />
              </div>
              <p> { price * amout[id] } </p>
              <button type="button" onClick={ () => removeCart(item)}>remove</button>
            </div>
          )
        }) }



        <p> { cartTotal } </p>
        <button type="button" onClick={() => alert('go to checkout')}> Checkout </button>
      </section>
      <Footer />
      </>
    );
  }
  
  export default ShopCart;