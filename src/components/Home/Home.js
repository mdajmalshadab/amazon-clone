import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';
import carouselList from '../../carouselList';

import TopDeals from '../TopDeals/TopDeals';
import ProductAd from '../ProductAd/ProductAd';
import productAdList from '../ProductAd/productAdList';
import RelatedItem from '../RelatedItem/RelatedItem';
import {
  popularItemList,
  relatedItemList,
  responsiveRelatedItem,
} from '../RelatedItem/RelatedItemList';
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts';
import prodList from '../RecommendedProducts/prodList';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import Notify from '../Notify/Notify';
import watchList from '../SmartWatches/watchList';

function Home() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [notify, setNotify] = useState([
    {
      image: null,
      title: null,
    },
  ]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Render Carousel Sliders
  function renderCarousel(image) {
    return (
      <div
        className='home__carouselImageDiv'
        style={{ cursor: 'pointer' }}
      >
        <img className='home__image' src={image} alt='amazon-ad' />
      </div>
    );
  }

  // Render Product Ad

  function renderProductAd(prop) {
    return (
      <ProductAd
        title={prop.title}
        image1={prop.image1}
        image2={prop.image2}
        image3={prop.image3}
        image4={prop.image4}
        subtitle1={prop.subtitle1}
        subtitle2={prop.subtitle2}
        subtitle3={prop.subtitle3}
        subtitle4={prop.subtitle4}
      />
    );
  }

  function routeToDetails(prop) {
    localStorage.setItem('prop', JSON.stringify(prop));
    //Scrolls to Top
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  //Render Related Item

  function renderRelatedItem(prop) {
    return (
      <Link to='/details'>
        <div onClick={() => routeToDetails(prop)}>
          <RelatedItem image={prop.image} />
        </div>
      </Link>
    );
  }

  function AddNotify(img, title) {
    console.log('hello');
    setNotify((prevValue) => [
      {
        image: img,
        title: title,
      },
      ...prevValue,
    ]);
  }

  //Render Last Item List

  function renderLastItem(prop) {
    return (
      <RecommendedProducts
        key={prop.imageURL}
        imageURL={prop.imageURL}
        title={prop.title}
        rating={prop.rating}
        ratingCount={prop.ratingCount}
        price={prop.price}
        day={prop.day}
        date={prop.date}
        AddNotify={AddNotify}
      />
    );
  }

  function renderNotify(prop) {
    return (
      <Notify
        key={prop.image}
        image={prop.image}
        title={prop.title}
      />
    );
  }

  return (
    <div className='home'>
      <div className='home__container'>
        {/************************************************ Amazon Ad  ******************************************/}

        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            transitionDuration={3500}
            containerClass='home__containerCarousel'
            arrows={true}
            swipeable={true}
          >
            {carouselList.map(renderCarousel)}
          </Carousel>
        </div>
        {/********************************************** Product Ads *********************************************/}

        <div className='home__productAd'>
          {productAdList.map(renderProductAd)}
        </div>

        {/* Today's Deals */}

        <TopDeals />

        {/********************************************** Related Items *******************************************/}
        <div className='home__relatedItem'>
          <h1>
            Related to items you've viewed{' '}
            <span className='home__relatedItem__seeMore'>
              See more
            </span>
          </h1>
          <Carousel
            responsive={responsiveRelatedItem}
            itemClass='home__relatedItemCarousel'
            infinite={false}
            renderArrowsWhenDisabled={true}
            centerMode={false}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            swipeable={true}
          >
            {relatedItemList.map(renderRelatedItem)}
          </Carousel>
        </div>

        {/************************************************ Popular Items  ********************************************/}
        <div className='home__relatedItem'>
          <h1>
            Popular repeat delivery items{' '}
            <span className='home__relatedItem__seeMore'>
              Subscribe & Save
            </span>
          </h1>
          <Carousel
            responsive={responsiveRelatedItem}
            itemClass='home__relatedItemCarousel'
            infinite={false}
            renderArrowsWhenDisabled={true}
            centerMode={false}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            swipeable={true}
          >
            {popularItemList.map(renderRelatedItem)}
          </Carousel>
        </div>

        {/*************************************************** Smart Watches  *************************************/}
        <div className='home__relatedItem'>
          <h1>
            Up to 40% off | Refurbished activity trackers{' '}
            <span className='home__relatedItem__seeMore'>
              See more
            </span>
          </h1>
          <Carousel
            responsive={responsiveRelatedItem}
            itemClass='home__relatedItemCarousel'
            infinite={false}
            renderArrowsWhenDisabled={true}
            centerMode={false}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            swipeable={true}
          >
            {watchList.map(renderRelatedItem)}
          </Carousel>
        </div>

        {/******************************* Recommended Products from browsing history *****************************/}

        <div className='home__lastItem'>
          <h1>Inspired by your browsing history</h1>
          <Carousel
            responsive={responsiveRelatedItem}
            itemClass='home__lastItemCarousel'
            infinite={false}
            renderArrowsWhenDisabled={true}
            centerMode={false}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            swipeable={true}
          >
            {prodList.map(renderLastItem)}
          </Carousel>
        </div>

        {/************************************************ Bottom Sign In  *******************************************/}
        {!user && (
          <div className='home__bottomSignIn'>
            <div></div>
            <p className='home__bottomRecommendations'>
              See personalized recommendations
            </p>
            <Link to='/logIn'>
              <button>Sign in</button>
            </Link>
            <p className='home__bottomNewCustomer'>
              New Customer?{' '}
              <Link to='/signup'>
                <span>Start here.</span>
              </Link>
            </p>
            <div></div>
          </div>
        )}

        <div className='home__notify'>
          {notify.slice(0, 1).map(renderNotify)}
        </div>
      </div>
    </div>
  );
}

export default Home;
