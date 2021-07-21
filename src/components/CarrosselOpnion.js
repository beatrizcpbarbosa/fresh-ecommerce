import React, { useContext }from 'react';
import ContextShop from '../contexApi/ContexShop';
import Carousel from 'react-elastic-carousel'



function CarrosselOpnion() {
  const { opnion } = useContext(ContextShop);

  return(
  <Carousel itemsToShow={1}>
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