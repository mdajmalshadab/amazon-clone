import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import topDealItemList from '../TopDealItems/TopDealItemList';
import TopDealItems from '../TopDealItems/TopDealItems';
import './TopDeals.css';

function TopDeals() {
  function renderTopDealCarousel(item) {
    return <TopDealItems image={item.url} priceRange={item.price} />;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6.6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='topDeals'>
      <div className='topDeals__container'>
        <div className='topDeals__heading'>
          <h1>Today's Deals</h1>
          <p>See all Details</p>
        </div>
        <div className='topDeals__carousel'>
          <Carousel
            responsive={responsive}
            itemClass='topDealsCarousel__item'
            infinite={false}
            renderArrowsWhenDisabled={true}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            swipeable={true}
          >
            {topDealItemList.map(renderTopDealCarousel)}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TopDeals;
