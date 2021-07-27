import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import  ContexShop from './ContexShop';
import { productsData } from '../data/ProductsData'
import { OpnionData } from '../data/OpnionData'

function ProviderShop({ children }) {  
  const [opnion, setOpnion] = useState(OpnionData);
  const [messageContact, setMessageContact] = useState([]);
  const [email, setEmail] = useState([]);

  const [cartItens, setCartItens] = useState([]);
  const [cartAmout, setCartAmout] = useState(0);
  const [productsAmout, setProductsAmout] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  
  useEffect(() => {
    getTotal();
  }, [cartAmout]);

  useEffect(() => {
    const amout = cartItens.reduce((previous, current) => (
      previous[current.id] ?
      {...previous, [current.id]: previous[current.id] += 1} :
      {...previous, [current.id]: 1}
    ),{});
    console.log(amout);

    setProductsAmout(amout);
  }, [cartItens]);

  function addToCart(info) {
    setCartItens((previous) => [...previous, info]);
    console.log(cartItens);
  
    setCartAmout(previous => previous + 1);
    console.log(cartAmout);
  }
  
  function increment(info) {
    const { id } = info;

    setCartAmout(previous => previous + 1);

    setProductsAmout(prevState => {
      return {...prevState, [id]: productsAmout[id] + 1}
    });
  }

  function decrement(info) {
    const { id } = info;

    if(productsAmout[id] === 1) {
      setProductsAmout(prevState => {
        return {...prevState, [id]: 1 }
      });
    } else {
      setProductsAmout(prevState => {
        return {...prevState, [id]: productsAmout[id] - 1}
      });
      setCartAmout(previous => previous - 1);
    }
  }

  function removeCart(info) {
    const { id } = info;

    if(window.confirm("Do you want to delete this product?")){
      const filterRemove = cartItens.filter((item) => item.id !== id);
      setCartItens([...filterRemove]);
      setCartAmout(previous => previous - productsAmout[id]);
    }
  }

  function getTotal() {
    if(cartItens.length !== 0){
      // https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript
      const filter = cartItens.filter((item, index) => {
        return cartItens.indexOf(item) === index;
      });
      console.log(filter);
      const total = filter.reduce((previous, current) => {
        return (previous.price * productsAmout[previous.id]) + (current.price * productsAmout[current.id]);
      })
      console.log(total);
      setCartTotal(total);
    }
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
    cartTotal,
    productsAmout,
    increment,
    decrement,
    removeCart,
    setCartAmout,
    setProductsAmout,
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