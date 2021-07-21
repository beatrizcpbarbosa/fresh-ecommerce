import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextShop from '../contexApi/ContexShop';
import CarrosselOpnion from '../components/CarrosselOpnion';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function ProductShop() {
  const { products, addToCart } = useContext(ContextShop);
  const { id } = useParams();
  const [amoutNumber, setAmoutNumber] = useState(1);
 
  const productObject = products.filter((item) => {
    console.log(item.id);
    return item.id === Number(id);
  });
  
  const { name, describe, img, price, type } = productObject[0]

  return(
    <>
    <Header />
    <div className="info-product">
    <img src={ img } alt="product img" width="100"/>
      <div>
        <h2> { name } </h2>
        <p> { price } </p>
        <p> { type } </p>
        <p> { describe } </p>

        <div>
          <AiOutlinePlus  onClick={ () => console.log('click')} />
            { amoutNumber }
          <AiOutlineMinus  onClick={ () => console.log('click')} />
        </div>
       

        <button type="button" onClick={() => addToCart(productObject[0])}>
          add to shop
        </button>
      </div>
    </div>
    <CarrosselOpnion />
    <Footer />
    </>
  );
  }
  
  export default ProductShop;