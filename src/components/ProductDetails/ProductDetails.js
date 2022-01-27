import React from 'react';
import './ProductDetails.css';
import StarIcon from '@mui/icons-material/Star';
import { StringToIntPrice } from '../../reducer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockIcon from '@mui/icons-material/Lock';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import addToBasket from '../RecommendedProducts/RecommendedProducts';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import facebook from './Images/facebook.png';
import email from './Images/email.png';
import twitter from './Images/twitter.png';
import pinterest from './Images/pinterest.png';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function ProductDetails() {
  //Thousand Separator
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const prop = JSON.parse(localStorage.getItem('prop'));

  //Add to Basket

  const [state, dispatch] = useStateValue();

  function addToBasket() {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        key: prop.imageDetail,
        id: prop.imageDetail,
        title: prop.title,
        image: prop.imageDetail,
        price: prop.newPrice,
        rating: prop.rating,
      },
    });
  }

  return (
    <div className='prodDetails'>
      {/* Top Bar  */}

      <div className='prodDetails__topBar'>
        <p>Mobile & Accessories</p>
        <p>Laptops & Accessories</p>
        <p>TV & Home Entertainment</p>
        <p>Audio</p>
        <p>Cameras</p>
        <p>Computer Peripherals</p>
        <p>Smart Technology</p>
        <p>Musical Instrument</p>
        <p>Office & Stationary</p>
      </div>

      {/******************************************** Image Section  ***********************************************/}
      <div className='prodDetails__container'>
        <div className='prodDetails__image'>
          {/* Large Image */}
          <img
            className='prodDetails__largeImage'
            src={prop.imageDetail}
            alt='prod-image'
          />
          {/* Small Images  */}
          <div className='prodDetails__imageList'>
            <img src={prop.imageDetail} alt='prod-image' />
            <img src={prop.imageDetail} alt='prod-image' />
            <img src={prop.imageDetail} alt='prod-image' />
            <img src={prop.imageDetail} alt='prod-image' />
            <img src={prop.imageDetail} alt='prod-image' />
          </div>
        </div>

        {/************************************************** Details Section *******************************************/}

        <div className='prodDetails__details'>
          {/* Title  */}
          <h1>{prop.title}</h1>

          {/* Rating  */}
          <div className='prodDetails__detailsRating'>
            {Array(Math.floor(prop.rating))
              .fill()
              .map((_, i) => (
                <StarIcon className='starIcon' />
              ))}
            {Array(5 - Math.floor(prop.rating))
              .fill()
              .map((_, i) => (
                <StarBorderIcon className='starIcon' />
              ))}

            <p>
              {Math.floor(Math.random() * 1000 + 1)} ratings |{' '}
              {Math.floor(Math.random() * 100 + 1)} answered questions
            </p>
          </div>

          <div className='prodDetails__hr'></div>

          {/* Price  */}
          <div className='prodDetails__priceSection'>
            <span>
              <p className='prodDetails__priceLeft'>MRP: </p>
              <p className='prodDetails__priceRightTop'>
                <small>₹</small>
                {numberWithCommas(
                  Number(StringToIntPrice(prop.price)).toFixed(2)
                )}
              </p>
            </span>

            <span>
              <p className='prodDetails__priceLeft'>Deal Price: </p>
              <p className='prodDetails__priceRightMiddle'>
                <small>₹</small>
                {numberWithCommas(
                  Number(StringToIntPrice(prop.newPrice)).toFixed(2)
                )}
              </p>
            </span>

            <span>
              <p className='prodDetails__priceLeft'>You Save: </p>
              <p className='prodDetails__priceRight'>
                <small>₹</small>
                {numberWithCommas(
                  Number(
                    StringToIntPrice(prop.price) -
                      StringToIntPrice(prop.newPrice)
                  ).toFixed(2)
                )}
                {' (' +
                  Math.floor(
                    ((StringToIntPrice(prop.price) -
                      StringToIntPrice(prop.newPrice)) *
                      100) /
                      StringToIntPrice(prop.price)
                  ) +
                  '%)'}
              </p>
            </span>

            <span>Inclusive of all taxes</span>
            <p className='prodDetails__emi'>
              <strong>EMI</strong> starts at ₹
              {Math.floor(StringToIntPrice(prop.newPrice) / 10)}. No
              Cost EMI available <span>EMI options</span>
            </p>
          </div>

          {/* Table  */}
          <div className='prodDetails__table'>
            <table>
              <tr>
                <td>
                  <LocalOfferIcon className='prodDetails__save' />
                  <span> Save Extra</span> with 3 offers
                </td>
              </tr>
              <tr>
                <td>
                  <span>Bank Offer (5):</span> 10% Instant Discount up
                  to INR 1500 on American Express Credit Card...
                </td>
              </tr>
              <tr>
                <td>
                  <span>No Cost EMI:</span> Avail No Cost EMI on
                  select cards for orders above ₹3000
                </td>
              </tr>
            </table>
          </div>

          {/********************** Delivery Section  **********************/}
          <div className='prodDetails__delivery'>
            <div className='prodDetails__deliveryContent'>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png'
                alt=''
              />
              <p>
                7 Days <br /> Replacement
              </p>
            </div>

            <div className='prodDetails__deliveryContent'>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png'
                alt=''
              />
              <p>
                Amazon <br /> Delivered
              </p>
            </div>

            <div className='prodDetails__deliveryContent'>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png'
                alt=''
              />
              <p>
                6 Month <br /> Warranty
              </p>
            </div>

            <div className='prodDetails__deliveryContent'>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png'
                alt=''
              />
              <p>
                No-Contact <br /> Delivery
              </p>
            </div>
          </div>
          <div className='prodDetails__hr'></div>

          {/* Dummy Product Details  */}
          <div className='prodDetails__desc'>
            <div className='prodDetails__descContent'>
              <h4>
                Lorem ipsum dolor sit amet. Aut officiis rerum qui
                voluptatem vitae vel totam explicabo et possimus
                expedita. Nam odit quidem ex sequi
              </h4>
              <p>
                - Sit dignissimos animi et tempora autem sit enim
                impedit.
              </p>
              <p>
                - Ehifm officiis ipsam quisquam sunt eum quidem
                voluptatem. Sed quaerat mollitia ea
              </p>
              <p>
                - Ab atque dolores cum necessitatibus voluptatem ut
                nulla iure. Et facere officia
              </p>
            </div>

            <div className='prodDetails__hr'></div>
            <div className='prodDetails__descContent'>
              <h4>About this item</h4>
              <ul>
                <li>
                  Quo officia saepe aut libero error est amet
                  molestiae est cumque totam. Eos dolor facere et illo
                  quia qui laborum facere ab fuga recusandae non
                  deserunt quidem aut expedita omnis.{' '}
                </li>
                <li>
                  {' '}
                  Quo provident cupiditate eos unde dignissimos eum
                  dolores rerum quo consequatur voluptas.
                </li>
                <li>
                  Ut officia totam non iste excepturi id magni
                  voluptatem ut sunt modi. Id aliquam culpa sit vitae
                  voluptatem qui quia nisi est tempore enim hic
                  perferendis placeat
                </li>
                <li>
                  vel natus numquam. Aut quisquam reprehenderit et
                  laboriosam soluta eum dolore debitis sit maxime
                  quidem qui ullam quaerat ex placeat velit.
                </li>
              </ul>
              <p> See more product details</p>
            </div>
          </div>
        </div>

        {/******************************************* Buying Section  ********************************************/}

        <div className='prodDetails__buy'>
          {/* Share  */}
          <div className='prodDetails__buyShare'>
            <p>Share</p>
            <img src={email} alt='email-icon' />
            <img src={facebook} alt='facebook-icon' />
            <img src={twitter} alt='twitter-icon' />
            <img src={pinterest} alt='pinterest-icon' />
          </div>

          {/* Container  */}
          <div className='prodDetails__buyContainer'>
            <h3>
              ₹
              {numberWithCommas(
                Number(StringToIntPrice(prop.newPrice)).toFixed(2)
              )}
            </h3>
            <p className='prodDetails__buyPara'>
              <span>FREE Delivery: </span>
              <strong>{prop.day + ', ' + prop.date}</strong>
            </p>
            <p>
              Fastest delivery: <strong>Today</strong>
            </p>
            <p>
              Order within 11 hrs and 33 mins <br />{' '}
              <span>Details</span>{' '}
            </p>
            <div className='prodDetails__buyInStock'>In stock.</div>
            <p>
              Sold by <span>Appario.</span> and{' '}
              <span>Fulfilled by Amazon</span>.
            </p>

            {/* Add to Basket Button  */}
            <button
              onClick={addToBasket}
              className='prodDetails__addToCart'
            >
              Add to Cart
            </button>

            {/* But Now Button  */}
            <Link to='/checkout'>
              <button
                onClick={addToBasket}
                className='prodDetails__buyNow'
              >
                Buy Now
              </button>
            </Link>

            <div className='prodDetails__buyNowBelow'>
              <LockIcon className='prodDetails__lockIcon' />
              <span>Secure transaction</span>
            </div>

            <div className='prodDetails__addGifts'>
              <input type='checkbox' />
              <p>Add gift options</p>
            </div>

            <div className='prodDetails__hr'></div>
            <div className='prodDetails__location'>
              <LocationOnOutlinedIcon className='prodDetails__locationIcon' />
              <span>Select delivery location</span>
            </div>
            <div className='prodDetails__hr'></div>

            <button className='prodDetails__wishList'>
              Add to Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
