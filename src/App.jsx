import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Store from './Store';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Login from './Components/Login';
import ProductDetail from './Components/Layout/ProductDetails/ProductDetail';
import Layout from './Components/Layout/Layout';
import CartContext from './Store/cart-context';
import { useContext } from 'react';

function App() {
  const cartCtx=useContext(CartContext)
  return (
    <Layout>
      <Switch>
        {cartCtx.isLoggedIn && <Route path="/" exact>
          <Store />
        </Route>}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {cartCtx.isLoggedIn && <Route path="/contact">
          <Contact />
        </Route>}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
        <Route path='*'>
          <Redirect to='/login'/>
        </Route>
      </Switch>
</Layout>
  );
}

export default App;

