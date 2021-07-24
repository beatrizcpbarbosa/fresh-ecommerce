import React, { useContext } from 'react';
import '../css/header.css';
import ContextShop from '../contexApi/ContexShop';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo2.png'

function Header() {
    const { cartAmout } = useContext(ContextShop);
    return(
      <section>
        <div className="upHeader">
          Free shipping from $50
        </div>
        <header>
          <Link to='/' className="link">
            <img src={logo} alt="Fresh"/>
          </Link>
          <div className="menu">
            <Link to='/about' className="link">About</Link>
            <Link to='/shop' className="link">Shop</Link>
            <Link to='/cart' className="link-shop">
              <AiOutlineShopping className="shop-icon"/>
              <div className="amout-icon"> { cartAmout } </div>
            </Link>
          </div>
        </header>
      </section>

    );
  }
  
  export default Header;