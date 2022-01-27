import React from 'react';
import './RecommendedProducts.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../../StateProvider';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function RecommendedProducts({
  imageURL,
  title,
  rating,
  ratingCount,
  price,
  day,
  date,
  AddNotify,
}) {
  const [state, dispatch] = useStateValue();

  function addToBasket() {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        key: imageURL,
        id: imageURL,
        title: title,
        image: imageURL,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div className='recommendedProducts'>
      <div>
        <img
          className='recommendedProducts__image'
          src={imageURL}
          alt='product-image'
        />
      </div>
      <div className='recommendedProducts__lastDiv'>
        <h2>{title}</h2>
        <div className='recommendedProducts__rating'>
          <span className='recommendedProducts__star'>
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
          </span>
          <span className='recommendedProducts__ratingCount'>
            {ratingCount}
          </span>
        </div>
        <h3>
          <small>₹</small>
          {price}
        </h3>
        <p>
          Get it by{' '}
          <strong>
            {day}, {date}
          </strong>
          <br />
          FREE Delivery over ₹499 . Fulfilled by Amazon
        </p>
        <button
          onClick={() => {
            addToBasket();
            AddNotify(imageURL, title);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default RecommendedProducts;
