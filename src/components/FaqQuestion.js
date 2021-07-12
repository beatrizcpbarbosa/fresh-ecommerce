import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function FaqQuestion(props) {
  const { ask, answer } = props.info;
  const [showInfo, setShowInfo] = useState(false);
    return(
      <section>
        <div>
          <h4>{ ask }</h4>
          <button type="button" onClick={() => setShowInfo(!showInfo)}> 
            { showInfo ? <BsChevronUp /> : <BsChevronDown /> }
          </button>
        </div>
        
        { showInfo ? <p>{answer}</p> : null }

      </section>
  );
}
  
  export default FaqQuestion;