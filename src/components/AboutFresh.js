import React, { useState }from 'react';
import { aboutData } from '../data/AboutData';

function AboutFresh() {
  const [value, setValue] = useState(0);

  const { title, describe } = aboutData[value];
  
  return(
    <section className="">
      <div>
        { aboutData.map((item, index) => (
          <button type="button" key={ index } onClick={() => setValue(index)}> 
            { item.buttonName }
          </button>
        )) }
        
      </div>

      <div>
        <h3>{ title }</h3>
        <p>{ describe }</p>
      </div>

    </section>
  );
  }
  
  export default AboutFresh;