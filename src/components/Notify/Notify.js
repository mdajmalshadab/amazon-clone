import React from 'react';
import './Notify.css';

function Notify({ image, title }) {
  return (
    image && (
      <div className='notify'>
        <div className='notify__product'>
          <img className='notify__image' src={image} alt='' />

          <p className='notify__title'>
            {title.substr(0, 35) + '...'}
          </p>
        </div>
      </div>
    )
  );
}

export default Notify;
