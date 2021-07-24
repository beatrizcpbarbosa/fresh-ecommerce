import React, { useContext }from 'react';
import '../css/infoProduct.css';
import ContextShop from '../contexApi/ContexShop';
import Carousel from 'react-elastic-carousel'



function CarrosselOpnion() {
  const { opnion } = useContext(ContextShop);
  console.log( opnion );


  return(
  <Carousel itemsToShow={3}>
    { opnion.map((item) => (
      <div>
        <p> { item.describe } </p>
        <p> { ` ${item.name}, ${item.age}` }</p>
      </div>
    ))}
  </Carousel>
  );
  }
  
  export default CarrosselOpnion;