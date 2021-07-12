import React from 'react';
import '../css/header.css';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo2.png'

function Header() {
    return(
      <section>
        <div className="upHeader">
          Free shipping from $50
        </div>
        <header>
          <Link to='/' className="link">
            <img src={logo} alt="Fresh"/>
          </Link>
          <div>
            <Link to='/about' className="link">About</Link>
            <Link to='/shop' className="link">Shop</Link>
            <Link to='/cart' className="link"><AiOutlineShopping /></Link>
          </div>
        </header>
      </section>

    );
  }
  
  export default Header;