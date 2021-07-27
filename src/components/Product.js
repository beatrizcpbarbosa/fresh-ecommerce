import React, { useContext } from 'react';
import '../css/product.css';
import { Link } from 'react-router-dom';
import ContextShop from '../contexApi/ContexShop';
import { AiOutlineShopping, AiOutlinePlus } from 'react-icons/ai';

function Product({info}) {
  const { img, name, price, id } = info;
  const { addToCart } = useContext(ContextShop);

  return(
    <div className="product-conteiner">

      <div className="img-container">

        <img src={ img } alt="product img"/>

        <div className="btns-product">
          <Link to={ `/shop/${id}` }>
            <button type="button" className="see-more">
              See more
            </button>
          </Link>

          <button type="button" onClick={() => addToCart(info)} className="add-cart">
            <AiOutlinePlus /> <AiOutlineShopping />
          </button>
        </div>

      </div>

      <h4> { name } </h4>
      <p> { price }</p>

    </div>
  );
  }
  
  export default Product;