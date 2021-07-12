import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FaqQuestion from '../components/FaqQuestion'
import data from '../data/FaqData'

function FAQ() {
    return(
      <>
      <Header />
      
      <h2>Frequenty Asked Questions</h2>
      <p>If you can’t find your answer, plus check out our 
        <Link to='/contact' className="link">support page</Link>
      </p>

      { data.map((item,index) => {
        return <FaqQuestion key={index} info={item} />
      })}
    
      </>
    );
  }
  
  export default FAQ;