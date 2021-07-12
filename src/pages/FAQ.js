import React from 'react';
import '../css/faq.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FaqQuestion from '../components/FaqQuestion'
import data from '../data/FaqData'

function FAQ() {
    return(
      <>
      <Header />
      
      <div className="faq-header">
        <h1>Frequenty Asked Questions</h1>
        <p>If you can’t find your answer, plus check out our  
          <Link to='/contact'> support page</Link>
        </p>
      </div>

      { data.map((item,index) => {
        return <FaqQuestion key={index} info={item} />
      })}
    
      </>
    );
  }
  
  export default FAQ;