import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContextShop from '../contexApi/ContexShop';
import { AiOutlineShopping, AiOutlinePlus } from 'react-icons/ai';

function Product({info}) {
  //console.log(info);
  const { img, name, price } = info;
  const { addToCart } = useContext(ContextShop);

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

      <button type="button" onClick={() => addToCart(info)}>
        <AiOutlinePlus /> <AiOutlineShopping />
      </button>
    </div>
  );
  }
  
  export default Product;