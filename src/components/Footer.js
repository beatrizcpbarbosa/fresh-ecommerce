import React, { useContext, useEffect, useState } from 'react';
import '../css/footer.css';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '../imgs/logo2.png'
import ContextShop from '../contexApi/ContexShop';

function Footer() {
    const [disabled, setDisabled] = useState(true);
    const [input, setInput] = useState('');
    const { email, setEmail } = useContext(ContextShop);

    useEffect(() => {
      function EmailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
      EmailIsValid(input) ? setDisabled(false) : setDisabled(true); 
    }, [input]);

    function handleClick() {
      setEmail((previous) => [ ...previous, input]);
      console.log(email);
    }

    //console.log(email);

    return(
      <section>
        <footer>
          <Link to='/' className="link">
            <img src={logo} alt="Fresh"/>
          </Link>

          <div>
              <p>NewsLetter</p>
              <p>Join our new letter and recibe an cupom</p>
              <div>
                <input type="text" onChange={ (ev) => setInput(ev.target.value) }/>
                <button disabled={ disabled } onClick={ handleClick }> <BsArrowRight /></button>
              </div>
          </div>

          <div className="container-footer">
            <p> About </p>
            <Link to='/contact' className="link-footer"> Contact </Link>
            <Link to='/faq' className="link-footer"> Faq </Link>
          </div>

          <div className="container-footer">
            <p> Follow </p>
            <Link to='/' className="link-footer">Instagram</Link>
            <Link to='/' className="link-footer">Facebook</Link>
          </div>

        </footer>
      </section>

    );
  }
  
  export default Footer;