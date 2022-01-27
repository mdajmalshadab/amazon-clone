import React from 'react';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { Link } from 'react-router-dom';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='checkout-ad'
        />

        <div className='checkout__titleSection'>
          <h2 className='checkout__title'>Your Shopping Cart</h2>
          <p>Price</p>
        </div>

        {basket.length === 0 && (
          <div className='checkout__emptyCart'>
            <h2>Your Amazon Cart is Empty</h2>
            <Link to='/'>
              <p>Shop Today's Deals</p>
            </Link>
          </div>
        )}

        <div className='checkout__hr'></div>
        <div className='checkout__checkoutProduct'>
          {basket
            .slice(0)
            .reverse()
            .map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hr={true}
              />
            ))}
        </div>

        <div className='checkout__bottomTotal'>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket?.length} items):{' '}
                  <strong>{value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
          />
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
