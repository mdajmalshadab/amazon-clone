import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseFile';
import { useStateValue } from '../../StateProvider';
import Order from './Order/Order';
import './Orders.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  const paymentStatus = JSON.parse(localStorage.getItem('payment'));

  console.log('Payment Status>>>', paymentStatus);
  function closePopup() {
    document
      .getElementById('pay')
      .classList.add('orders__paymentHide');
    localStorage.setItem('payment', false);
    paymentStatus = false;
  }
  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      {paymentStatus && (
        <div id='pay' className='orders__paymentSuccess'>
          <div className='orders__payment'>
            <CloseIcon
              onClick={closePopup}
              className='orders__paymentCloseIcon'
            />

            <CheckCircleOutlineIcon className='orders__paymentIcon' />
            <h1>Order Placed!</h1>
            <h2>Payment Successful.</h2>
            <p>Thank you for shopping with Amazon.</p>
          </div>
        </div>
      )}
      <div className='orders__order'>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
