import React from 'react';
import './TopDealItems.css';

function TopDealItems({ image, priceRange }) {
  return (
    <div className='topDealItem'>
      <img src={image} alt='product-img' />
      <p>{priceRange}</p>
    </div>
  );
}

export default TopDealItems;
