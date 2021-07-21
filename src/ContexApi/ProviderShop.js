import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  ContexShop from './ContexShop';
import { productsData } from '../data/ProductsData'
import { OpnionData } from '../data/OpnionData'

function ProviderShop({ children }) {
  // const [products, setProducts] = useState(productsData);
  
  const [opnion, setOpnion] = useState(OpnionData);
  const [messageContact, setMessageContact] = useState([]);
  const [email, setEmail] = useState([]);

  const [cartItens, setCartItens] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartAmout, setCartAmout] = useState(0);
  const [ProductsAmout, setProductsAmout] = useState([
    { 1: 1 }, { 2: 1 }, { 3: 1 }, { 4: 1 }, { 5: 1 }, 
  ]);

  
  function addToCart(info) {
    // const { amout, id } = info;
    const { id } = info;
  
    setCartAmout(previous => previous + 1);
    console.log(cartAmout);

    const check = cartItens.every((item) => item.id !== id);
    console.log(check);
    
    if(check){
      setCartItens((previous) => [...previous, info]);
    } else {
      
      const amout = ProductsAmout.find((item) => item[id]);
      console.log(amout)
      amout[id] += 1;
      setProductsAmout((previous) => [...previous, amout[id]]);
      console.log(amout[id]);
      
      // const productAmout = amout + 1
      // console.log(productAmout);
      // setProducts(previous => [
      //   ...previous,
      //   {
      //     ...previous,
      //     amout: productAmout,
      //   }
      // ])

      const filterRepeat = cartItens.filter((item) => item.id !== id);
      console.log(filterRepeat);
      setCartItens([...filterRepeat, info]);
    }  

    console.log(cartItens);
    console.log(ProductsAmout[4]);
  }
  
  function increment() {

  }

  function decrement() {
    
  }

  function removeCart() {
    
  }

  function getTotal() {
    
  }

  const contextValue = {
    email,
    // products,
    setEmail,
    addToCart,
    opnion,
    setOpnion,
    messageContact,
    setMessageContact,
  };

  return (
    <ContexShop.Provider value={ contextValue }>
      { children }
    </ContexShop.Provider>
  );
}

ProviderShop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderShop;