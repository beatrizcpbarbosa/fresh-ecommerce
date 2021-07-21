import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import Home from './Home';
import Shop from './Shop';
import ShopCart from './ShopCart';
import ProductShop from './ProductShop';

function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/shop" component={ Shop } />
      <Route exact path="/shop/:id" component={ ProductShop } />
      <Route exact path="/faq" component={ FAQ } />
      <Route exact path="/cart" component={ ShopCart } />
    </Switch>
  );
}

export default Routes;