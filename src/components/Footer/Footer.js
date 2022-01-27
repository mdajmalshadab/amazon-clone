import React from 'react';
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__backToTop'>
        <a href='/'>
          <p>Back to top</p>
        </a>
      </div>
      <div className='footer__upper'>
        <div>
          <h2>Get to Know Us</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>

        <div>
          <h2>Connect with Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div>
          <h2>Make Money with Us</h2>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfillment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>

        <div>
          <h2>Let Us Help You</h2>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className='footer__hr'></div>

      <div className='footer__middle'>
        <div className='footer__amazonLogo'>
          <img
            className='footer__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='amazon-logo'
          />
          <button>
            {' '}
            <LanguageIcon className='footer__languageIcon' /> English
          </button>
        </div>
        <div className='footer__language'>
          <p>Australia</p>
          <p>Brazil</p> <p>Canada</p> <p>China</p> <p>France</p>
          <p>Germany</p> <p>Italy</p> <p>Japan</p> <p>Mexico</p>
          <p>Netherlands</p> <p>Poland</p> <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p> <p>United Arab Emirates</p>
          <p>United Kingdom</p> <p> United States</p>
        </div>
      </div>

      <div className='footer__bottom'>
        <div className='footer__services'>
          <div>
            <h3>AbeBooks </h3>
            <p>
              Books, art <br />& collectibles
            </p>
          </div>

          <div>
            <h3>Amazon Web Services</h3>
            <p>
              Scalable Cloud <br /> Computing Services
            </p>
          </div>

          <div>
            <h3>Audible</h3>
            <p>
              Download <br /> Audio Books
            </p>
          </div>

          <div>
            <h3>DPReview </h3>
            <p>
              Digital <br /> Photography
            </p>
          </div>

          <div>
            <h3>IMDb</h3>
            <p>
              Movies, TV <br /> & Celebrities
            </p>
          </div>

          <div>
            <h3>Shopbop </h3>
            <p>
              Designer <br /> Fashion Brands
            </p>
          </div>

          <div>
            <h3>Amazon Business </h3>
            <p>
              Everything For <br /> Your Business
            </p>
          </div>

          <div>
            <h3>Prime Now </h3>
            <p>
              2-Hour Delivery <br /> on Everyday Items
            </p>
          </div>

          <div>
            <h3>Amazon Prime Music</h3>
            <p>
              75 million songs, ad-free <br /> Over 10 million podcast
              episodes
            </p>
          </div>
        </div>

        <div className='footer__bottomCopyright'>
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
          <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
