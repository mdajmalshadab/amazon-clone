import {
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';
import axios from '../../axios';
import { db } from '../../firebaseFile';

function Payment() {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special client secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        //Stripe expects the total in currency subunits (for ₹ 1: 100)
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log('THE SECRET IS >>>>>', clientSecret);

  //Handle Submit

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });
        localStorage.setItem('payment', true);
        history.replace('/orders');
      });
  };

  function handleChange(event) {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  }
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout(
          <Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        {/* Payment section - Delivery Address  */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>
              123, 6th Road <br /> React Lane
            </p>
            <p>Blackburn Drive Washington, PA</p>
          </div>
        </div>
        {/* Payment section - Product Review */}

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hr={false}
              />
            ))}
          </div>
        </div>
        {/* Payment section - Payment Method */}

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <h3>Enter Your Card Details</h3>
              <CardElement
                className='payment__cardElement'
                onChange={handleChange}
              />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />

                <button
                  disabled={processing || disabled || succeeded}
                >
                  <span>
                    {processing ? <p>Processing</p> : 'Buy Now'}
                  </span>
                </button>
              </div>

              {/* Errors  */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
