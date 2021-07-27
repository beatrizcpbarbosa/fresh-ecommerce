import React, { useContext } from 'react';
import '../css/shopCart.css';
import ContextShop from '../contexApi/ContexShop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function ShopCart() {
    const { cartItens, productsAmout, increment, decrement,
    removeCart, cartTotal } = useContext(ContextShop);

    if(cartItens === []){
      return <h2 className="cart-title"> Your cart is empty!</h2>
    } 
    return(
      <>
      <Header />
      <section>
        <h2 className="cart-title"> Your Shopping Cart</h2>

        { cartItens.map((item) => {
          const { id, img, price, name} = item;
          // const amout = productsAmout.find((object) => object[id]);
          return (
            <div className="cart-product">
              <img src={ img } alt="product img" width="100"/>
              <h4> { name } </h4>
              <p> { price } </p>
              <div>
                <AiOutlinePlus  onClick={() => increment(item)} />
                  {/* { amout[id] } */}
                  { productsAmout[id] }
                <AiOutlineMinus  onClick={() => decrement(item)} />
              </div>
              {/* <p> { price * amout[id] } </p> */}
              <button type="button" onClick={ () => removeCart(item)}>remove</button>
            </div>
          )
        }) }

        <div className="checkout">
          <p> { `Total: ${cartTotal}` } </p>
          <button type="button" onClick={() => alert('go to checkout')}> Checkout </button>
        </div>
      </section>
      <Footer />
      </>
    );
  }
  
  export default ShopCart;