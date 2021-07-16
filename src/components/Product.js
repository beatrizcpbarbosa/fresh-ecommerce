import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ContextShop from '../contexApi/ContexShop';
import { AiOutlineShopping, AiOutlinePlus } from 'react-icons/ai';

function Product(props) {
  const { img, name, price } = props.info;
  const { cartItens, setCartItens, cartAmout, setCartAmout } = useContext(ContextShop);
  const [ productAmount, setProductAmount ] = useState(0);

  function handleClick() {
    setCartAmout((previous) => previous + 1);
    setProductAmount((previous) => previous + 1);
    console.log(cartAmout);
    
    if (cartItens.some((item) => item === name)) {
      const productInCart = cartItens.filter((item) => item !== name);
      console.log(productInCart);
      setCartItens((previous) => [
        ...productInCart, 
        [ 
          props.info, 
          productAmount,
        ],
      ]);
    }

    setCartItens((previous) => [
      ...previous, 
      [ 
        props.info, 
        productAmount,
      ],
    ]);
    console.log(cartItens);
  }

  return(
    <div>
      <img src={ img } alt="product img" width="100"/>
      <h4> { name } </h4>
      <p> { price }</p>

      <Link to={ `/movies/${name}` }>
        <button type="button">
          quero conhecer
        </button>
      </Link>

      <button type="button" onClick={ handleClick }>
        <AiOutlinePlus /> <AiOutlineShopping />
      </button>
    </div>
  );
  }
  
  export default Product;