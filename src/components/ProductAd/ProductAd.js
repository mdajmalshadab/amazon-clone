import React from 'react';
import './ProductAd.css';

function ProductAd({
  title,
  image1,
  image2,
  image3,
  image4,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
}) {
  return (
    <div className='productAd'>
      <div className='productAd__container'>
        <h1>{title}</h1>
        <div className='productAd__row'>
          <div className='productAd__cell'>
            <img src={image1} alt='image-tl' />
            <p>{subtitle1}</p>
          </div>
          <div className='productAd__cell'>
            <img src={image2} alt='image-tl' />
            <p>{subtitle2}</p>
          </div>
        </div>
        <div className='productAd__row'>
          <div className='productAd__cell'>
            <img src={image3} alt='image-tl' />
            <p>{subtitle3}</p>
          </div>
          <div className='productAd__cell'>
            <img src={image4} alt='image-tl' />
            <p>{subtitle4}</p>
          </div>
        </div>
      </div>
      <p className='productAd__link'>See more</p>
    </div>
  );
}

export default ProductAd;
