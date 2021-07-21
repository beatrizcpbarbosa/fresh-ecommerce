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
  const [productsAmout, setProductsAmout] = useState([
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
      
      const amout = productsAmout.find((item) => item[id]);
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
    console.log(productsAmout[4]);
  }
  
  function increment(info) {
    const { id } = info;
    const amout = productsAmout.find((item) => item[id]);
    amout[id] += 1;
    setProductsAmout((previous) => [...previous, amout[id]]);
    setCartAmout(previous => previous + 1);
  }

  function decrement(info) {
    const { id } = info;
    const amout = productsAmout.find((item) => item[id]);
    
    if(amout[id] === 1) {
      amout[id] = 1;
      setProductsAmout((previous) => [...previous, amout[id]]);
    } else {
      amout[id] -= 1 ;
      setProductsAmout((previous) => [...previous, amout[id]]);
      setCartAmout(previous => previous - 1);
    }
  }

  function removeCart(info) {
    const { id } = info;
    const amout = productsAmout.find((item) => item[id]);

    if(window.confirm("Do you want to delete this product?")){
      const filterRemove = cartItens.filter((item) => item.id !== id);
      setCartItens([...filterRemove]);
      setCartAmout(previous => previous - amout[id]);
    }
  
  }

  function getTotal(info) {
    
  }

  const contextValue = {
    email,
    setEmail,
    opnion,
    setOpnion,
    messageContact,
    setMessageContact,
    addToCart,
    cartItens,
    cartAmout,
    productsAmout,
    increment,
    decrement,
    removeCart,
    getTotal,
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