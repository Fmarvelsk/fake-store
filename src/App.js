import React, {useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import Product from './components/ProductItem'
import Footer from './components/Footer';
import Checkout from './components/checkout'
import Payment from './components/payment'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NotFound from './components/NotFound'
import Axios from 'axios';
import { useStateValue } from './StateProvider';
import ViewProd from './components/ViewProduct';
import Orders from './components/orders';


const Apikey = loadStripe('pk_test_51HST2ACrAbXD0UyyFNxTJo8TDLxDJiGuMiuWsaDPVvH0ifiU484BOFuI1AvHGXPOwjzYwAa7FPYcaoQEbisGAKme00NchWU52p');

function App() {
  const [{product}, dispatch] = useStateValue()
  useEffect( () => {
    const Product = async () => {
    const getProduct = await Axios({
      method : 'GET',
      url:'https://fakestoreapi.com/products'
    }).then( result => {
        dispatch({
          type : 'State Product',
          product : result.data
        })
    })
  }
  Product()

  }, [])
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
      <Header/>
      <Product/>
      </Route>
<Route path='/checkout'>

  <Checkout/>
</Route>
<Route path="/payments">
    <Elements stripe={Apikey}>
    <Payment/>
    </Elements>
</Route>
<Route path='/viewProdut'>
  <ViewProd/>
</Route>
<Route path="/orders">
  <Orders/>
</Route>
<Route component={NotFound}>

  <NotFound/>
</Route>
      </Switch>

      <Footer/>

      </Router>
      
      
   </div>
  );
}

export default App;
