import React from 'react';
import './RelatedItem.css';

function RelatedItem({ image }) {
  return (
    <div className='relatedItem'>
      <img src={image} alt='product-image' />
    </div>
  );
}

export default RelatedItem;
