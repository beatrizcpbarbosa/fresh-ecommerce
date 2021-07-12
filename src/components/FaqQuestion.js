import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function FaqQuestion(props) {
  const { ask, answer } = props.info;
  const [showInfo, setShowInfo] = useState(false);
    return(
      <section className="faq-conteiner">

        <div className="faq-box">
          <h4>{ ask }</h4>
          <button type="button" onClick={() => setShowInfo(!showInfo)}> 
            { showInfo ? <BsChevronUp /> : <BsChevronDown /> }
          </button>
        </div>
        
        <div className="faq-p">
          { showInfo ? <p>{ answer }</p> : null }
        </div>

      </section>
  );
}
  
  export default FaqQuestion;