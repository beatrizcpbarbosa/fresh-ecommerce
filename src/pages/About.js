import React from 'react';
import '../css/about.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutFresh from '../components/AboutFresh';


function About() {
    return(
    <>
      <Header />

        <div className="about-header">
          <h2>FRESH IS A NEW WAY OF TAKE CARE YOUR SKIN</h2>
          <p>More than skin care products, Fresh is a welcoming place that connects people, ideas and content about beauty. That’s how, between honest conversations and careful research, we’re developing incredible formulas inspired by real needs.</p>
          <div></div>
        </div>

        <AboutFresh />

        <div className="about-content">
          <div className="img-oranges"></div>
          <div className="img-skincare"></div>
          <div>
            <p>We believe that people pay a very high price to feel beautiful and secure.These are very expensive products, often imported; long routines that do not fit with people's daily lives; inaccessible information about formulas and processes; and brands creating an unattainable and exclusive standard of beauty, selling the inadequacy to sell more and more products.And can it be different? We believe so.</p>
            <p>We are the result of a combination of honest conversations, safe choices and amazing formulas. We continually listen and listen to thousands of people on social media, in product reviews and, here, in our community. Then, together with our scientists and a little artificial intelligence, we arrived at products with superior efficiency, doing good for your skin and for the environment. And the best part: inspired by real needs.</p>
          </div>
        </div>
      <Footer />
    </>
    );
  }
  
  export default About;