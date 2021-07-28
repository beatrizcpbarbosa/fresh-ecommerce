import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import  ContexShop from './ContexShop';
import { OpnionData } from '../data/OpnionData'

function ProviderShop({ children }) {  
  const [opnion, setOpnion] = useState(OpnionData);
  const [messageContact, setMessageContact] = useState([]);
  const [email, setEmail] = useState([]);

  const [cartItens, setCartItens] = useState([]);
  const [cartAmout, setCartAmout] = useState(0);
  const [productsAmout, setProductsAmout] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  
  // useEffect(() => {
  //   getTotal();
  // }, [cartAmout, cartItens]);

  useEffect(() => {
    const amout = cartItens.reduce((previous, current) => (
      previous[current.id] ?
      {...previous, [current.id]: previous[current.id] += 1} :
      {...previous, [current.id]: 1}
    ),{});
  
    setProductsAmout(amout);
  }, [cartItens]);

  function addToCart(info) {
    setCartItens((previous) => [...previous, info]);
    setCartAmout(previous => previous + 1);
    getTotal();
  }
  
  function increment(info) {
    const { id } = info;

    setCartAmout(previous => previous + 1);
    setProductsAmout(prevState => {
      return {...prevState, [id]: productsAmout[id] + 1}
    });
    getTotal();
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
    getTotal();
  }

  function removeCart(info) {
    const { id } = info;

    if(window.confirm("Do you want to delete this product?")){
      const filterRemove = cartItens.filter((item) => item.id !== id);
      setCartItens([...filterRemove]);
      setCartAmout(previous => previous - productsAmout[id]);
      getTotal();
    }
  }

  function getTotal() {

    if(cartItens.length !== 0){
      // https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript
      const filter = cartItens.filter((item, index) => {
        return cartItens.indexOf(item) === index;
      });

      // const arrayPrice = filter.map((item) => {
      //   return item.price * productsAmout[item.id];
      // });

      // console.log(productsAmout[filter[0].id])
      // console.log(arrayPrice);
  
      const total = filter.reduce((previous, current) => {
        return (previous.price * productsAmout[previous.id]) + (current.price * productsAmout[current.id]);
      })
      

      // setCartTotal(total);

      
      let oneProduct;
      if ( filter.length === 1 && productsAmout[filter[0].id] > 1) {
        oneProduct = filter[0].price * productsAmout[filter[0].id];
      } else {
        oneProduct = filter[0].price;
      }
    

      //setCartTotal(cartItens.length !== 0 ? total : 0)
      setCartTotal(filter.length > 1 ? total : oneProduct);
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