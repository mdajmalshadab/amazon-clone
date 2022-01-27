import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebaseFile';
import Payment from './components/Payment/Payment';
import CreateUser from './components/CreateUser/CreateUser';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';
import Footer from '../src/components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const promise = loadStripe(
    'pk_test_51KHqcCSFE3d4x8O3DNAKqkhCDLMXZN4h5uvb2JlYOSjvtAUKKF4Mjl6YfVg3XDItkKDcTvJPTEMcAGPAxw3CWxz000jAfzMKM3'
  );
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only runs when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        //user just logged in / was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // The user logged out

        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* Login Page  */}
          <Route path='/login'>
            <Login />
          </Route>

          {/* Create User Page  */}
          <Route path='/signup'>
            <CreateUser />
          </Route>

          {/* Orders Page  */}
          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>

          {/* Checkout Page  */}
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>

          {/* Payment Page  */}
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
              <Footer />
            </Elements>
          </Route>

          {/* Product details Page  */}
          <Route path='/details'>
            <Header />
            <ProductDetails />
            <Footer />
          </Route>

          {/* Home Page  */}
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
