import React from 'react';

import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      {basket.length > 0 && (
        <div className='subtotal__freeDelivery'>
          <CheckCircleIcon className='subtotal__checkIcon' />
          <div>
            <span>Your order is eligible for FREE Delivery.</span>{' '}
            <p>Select this option at checkout. Details</p>
          </div>
        </div>
      )}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):{' '}
              <strong>{value}</strong>
            </p>

            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />

      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
