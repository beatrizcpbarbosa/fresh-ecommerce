import React, { useState, useContext, useEffect }from 'react';
import '../css/contact.css';
import ContextShop from '../contexApi/contexShop';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  const { messageContact, setMessageContact } = useContext(ContextShop);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    function EmailIsValid(emailinput) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailinput);
    }
    EmailIsValid(email) ? setDisabled(false) : setDisabled(true); 
  }, [email]);

  function handleClick(ev) {
    ev.preventDefault();

    setMessageContact((previous) => [
      ...previous,
      {
      name,
      email,
      message,
      }
    ]);
    console.log(messageContact);
  }

  return(
    <>
      <Header />

      <section className="contact-page"> 
        <div className="text-contact"> 
          <h2>Let us know if you need any help</h2>
          <p>If you can’t find your answer, plus check out our support page If you can’t find your answer, plus check out our support page</p>
        </div>
        <form onSubmit={ (ev) => handleClick(ev) } className="form-contact">
          <input
            type="text"
            placeholder="name"
            onChange={ (ev) => setName(ev.target.value) }
          />
          <input
            type="text"
            placeholder="age"
            onChange={ (ev) => setEmail(ev.target.value) }
          />
          <textarea
            placeholder="your opnion"
            onChange={ (ev) => setMessage(ev.target.value) }
          />

          <button type="submit" disabled={ disabled }>
            Send
          </button>
        </form>
      </section>


      <Footer />
    </>
  );
  }
  
  export default Contact;