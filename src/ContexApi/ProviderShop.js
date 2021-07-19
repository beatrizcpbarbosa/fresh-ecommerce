import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  ContexShop from './ContexShop';
import { productsData } from '../data/ProductsData'

function ProviderShop({ children }) {
  const [products, setProducts] = useState(productsData);
  // const [opnion, setOpnion] = useState([]);

  const [cartItens, setCartItens] = useState([]);
  const [cartAmout, setCartAmout] = useState(0);

  // const [messageContact, setMessageContact] = useState([]);
  const [email, setEmail] = useState([]);

  
  function addToCart(info) {
    const { amout } = info;
    

    setCartAmout(previous => previous + 1);
    

    const repeat = cartItens.some((item) => item.product.name === info.name);
    console.log(repeat);
    
    if(cartItens.some((item) => item.product.name === info.name)){

      setProducts(previous => [
        ...previous,
        {
          ...previous,
          amout: amout += 1,
        }
      ])
      
      const filterRepeat = cartItens.filter((item) => item.product.name !== info.name);
      setCartItens([...filterRepeat, info]);
    }

    setCartItens(previous => [...previous, info]);
    console.log(cartItens);

  }
  
  const contextValue = {
    email,
    setEmail,
    addToCart,
  };

  return (
    <ContexShop.Provider value={contextValue}>
      {children}
    </ContexShop.Provider>
  );
}

ProviderShop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderShop;