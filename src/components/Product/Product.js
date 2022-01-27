import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';

function Product({ id, title, price, image, rating }) {
  const [state, dispatch] = useStateValue();

  function addToBasket() {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className='product__star'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className='starIcon' />
            ))}
        </div>
      </div>

      <img src={image} alt='' />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
