import React from 'react';

function Product(props) {
  const { img, name, price } = props.info;
  return(
    <div>
      <img src={ img } alt="product img" />
      <h4> { name } </h4>
      <p> { price }</p>
    </div>
  );
  }
  
  export default Product;