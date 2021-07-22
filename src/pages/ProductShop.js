import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextShop from '../contexApi/ContexShop';
import CarrosselOpnion from '../components/CarrosselOpnion';
import FormOpnion from '../components/FormOpnion';
import { productsData } from '../data/ProductsData'
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";


function ProductShop() {
  const { addToCart } = useContext(ContextShop);
  const { id } = useParams();
  // const [quantity, setQuantity] = useState(0);
  const [showForm, setShowForm] = useState(false);
 
  const productObject = productsData.filter((item) => item.id === Number(id));
  
  const { name, describe, img, price, type } = productObject[0]

  // const amout = productsAmout.find((item) => item[id]);
  // amout[id] += quantity;
  // console.log(quantity);


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

        {/* <div>
          <AiOutlinePlus  onClick={() => increment(productObject[0])} />
            { amout[id] }
          <AiOutlineMinus  onClick={() => decrement(productObject[0])} />
        </div> */}
       
       {/* <label>
        Quantity
        <input type="number" onChange={(ev) => setQuantity(ev.target.value)}/>
       </label> */}

       

        <button type="button" onClick={() => {
          addToCart(productObject[0]);
          // setCartAmout(previous => previous + Number(quantity));
          // setProductsAmout((previous) => [...previous, amout[id]]);
        }}>
          add to shop
        </button>
      </div>
    </div>
    
    <CarrosselOpnion />

    <div className="form-conteiner">

        <div>
          <h4>Talk to us</h4>
          <button type="button" onClick={() => setShowForm(!showForm)}> 
            { showForm ? <BsChevronUp /> : <BsChevronDown /> }
          </button>
        </div>
        
        <div>
          { showForm ? <FormOpnion /> : null }
        </div>

    </div>

    <Footer />
    </>
  );
  }
  
  export default ProductShop;