import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  ContexShop from './ContexShop';

function ProviderShop({ children }) {
  //const [products, setProducts] = useState([]);
  // const [opnion, setOpnion] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [cartAmout, setCartAmout] = useState(0);
  // const [messageContact, setMessageContact] = useState([]);
  const [email, setEmail] = useState([]);
  
  const contextValue = {
    email,
    setEmail,
    cartItens,
    setCartItens,
    cartAmout,
    setCartAmout,
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