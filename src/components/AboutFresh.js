import React, { useState }from 'react';
import '../css/about.css';
import { aboutData } from '../data/AboutData';

function AboutFresh() {
  const [value, setValue] = useState(0);

  const { title, describe } = aboutData[value];
  
  return(
    <section className="aboutfresh">
      <div className="btns-aboutfresh">
        { aboutData.map((item, index) => (
          <button 
            type="button"
            key={ index }
            onClick={() => setValue(index)}
          > 
            { item.buttonName }
          </button>
        )) }
        
      </div>

      <div className="content-aboutfresh">
        <h3>{ title }</h3>
        <p>{ describe }</p>
      </div>

    </section>
  );
  }
  
  export default AboutFresh;