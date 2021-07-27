import React, { useContext } from 'react';
import '../css/shopCart.css';
import ContextShop from '../contexApi/ContexShop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function ShopCart() {
    const { cartItens, productsAmout, increment, decrement,
    removeCart, cartTotal } = useContext(ContextShop);

    const filter = cartItens.filter((item, index) => {
      return cartItens.indexOf(item) === index;
    });

    if(cartItens === []){
      return <h2 className="cart-title"> Your cart is empty!</h2>
    } 
    return(
      <>
      <Header />
      <section>
        <h2 className="cart-title"> Your Shopping Cart</h2>

        { filter.map((item) => {
          const { id, img, price, name} = item;
          return (
            <div className="cart-product">
              <img src={ img } alt="product img" width="100"/>
              <h4> { name } </h4>
              <p> { price } </p>
              <div>
                <AiOutlinePlus  onClick={() => increment(item)} />
                  { productsAmout[id] }
                <AiOutlineMinus  onClick={() => decrement(item)} />
              </div>
              <p> { price * productsAmout[id] } </p>
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