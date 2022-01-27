import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';

function Order({ order }) {
  const [{ basket, user }, dispatch] = useStateValue();

  function convertOrderId(id) {
    var numericId = '';
    for (var c of id) {
      var x = c.charCodeAt(0);
      x = x % 10;
      numericId = numericId + x.toString();
    }
    const finalId = numericId.substring(0, 12);
    return finalId;
  }

  //Trim Display name
  // function TrimName(name) {
  //   var newName = '';
  //   for (var x of name) {
  //     if (x === '$') break;
  //     newName += x;
  //   }
  //   return newName;
  // }

  return (
    <div className='order'>
      <div className='order__header'>
        <div className='order__headerLeft'>
          <div className='order__orderPlaced'>
            <h4>ORDER PLACED</h4>
            <p>
              {moment
                .unix(order.data.created)
                .format('Do MMMM YYYY, h:mma')}
            </p>
          </div>

          <div className='order__orderTotal'>
            <h4>TOTAL</h4>
            <CurrencyFormat
              renderText={(value) => (
                <p className='order__total'>{value}</p>
              )}
              decimalScale={2}
              value={order.data.amount / 100}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
            />
          </div>

          <div className='order__shipTo'>
            <h4>SHIP TO</h4>
            <p>{user ? user.displayName : ''}</p>
          </div>
        </div>
        <div className='order__id'>
          <h4>Order #</h4>
          <p>{convertOrderId(order.id)}</p>
        </div>
      </div>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
    </div>
  );
}

export default Order;
