import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  hr,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div>
      <div className='checkoutProduct'>
        <div className='checkoutProduct__product'>
          <img
            className='checkoutProduct__image'
            src={image}
            alt='product-img'
          />

          <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>
              {title.length > 70
                ? title.substr(0, 70) + '...'
                : title.substr(0, 70)}
            </p>
            <div className='checkoutProduct__inStock'>
              <small>In stock</small>
              <p>Eligible for FREE Shipping</p>
            </div>
            <div className='checkoutProduct__rating'>
              {Array(Math.floor(rating))
                .fill()
                .map((_, i) => (
                  <StarIcon className='starIcon' />
                ))}
              {Array(5 - Math.floor(rating))
                .fill()
                .map((_, i) => (
                  <StarBorderIcon className='starIcon' />
                ))}
            </div>
            {!hideButton && (
              <button onClick={removeFromBasket}>
                Remove from Basket
              </button>
            )}
            {hideButton && (
              <button className='checkoutProduct__orderDetails'>
                Order Details
              </button>
            )}
          </div>
        </div>

        <div className='checkoutProduct__priceRight'>
          <small>₹ </small>
          <h3>{price}</h3>
        </div>
      </div>
      {hr && <div className='checkoutProduct__hr'></div>}
    </div>
  );
}

export default CheckoutProduct;
