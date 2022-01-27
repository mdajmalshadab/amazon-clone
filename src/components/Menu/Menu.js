import React from 'react';
import './Menu.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Menu() {
  const [{ basket, user }, dispatch] = useStateValue();

  function closeMenu() {
    console.log('Closing>>>>');
    document
      .getElementById('hamburger-menu')
      .classList.toggle('close');

    document
      .getElementById('hamburger-menu-right')
      .classList.toggle('menu__rightDisplay');
  }
  return (
    <div className='menu close' id='hamburger-menu'>
      <div className='menu__left'>
        <div className='menu__header'>
          <div className='menu__headerLeft'>
            <div className='menu_headerLeftAccount'>
              <AccountCircleIcon />
              <p>
                {user ? (
                  user.displayName + "'s"
                ) : (
                  <Link to='/login'>'Sign in'</Link>
                )}{' '}
                Account
              </p>
            </div>

            <div className='menu__headerLeftBrowse'>
              <h3>Browse</h3>
              <h2>Amazon</h2>
            </div>
          </div>

          <div onClick={closeMenu} className='menu__headerRight'>
            <CloseIcon />
          </div>
        </div>

        <div className='menu__section'>
          {/* Menu Section -1  */}
          <div className='menu__sectionContainer'>
            <div className='menu__section1Title'>
              <h4>Amazon Home</h4>
              <HomeOutlinedIcon />
            </div>
            <div className='menu__items'>
              <Link to='/orders'>
                <p onClick={closeMenu}>Your Orders</p>
              </Link>
              <p>Your Prime</p>
            </div>
          </div>
          <div className='menu__hr'></div>

          {/* Menu Section -2  */}
          <div className='menu__sectionContainer'>
            <h4>Top Categories For You</h4>
            <div className='menu__items'>
              <p>Books</p>
              <p>Electronics</p>
              <p>Home & Kitchen</p>
              <p>Computers & Accessories</p>
              <p>See All Categories</p>
            </div>
          </div>
          <div className='menu__hr'></div>

          {/* Menu Section -3  */}
          <div className='menu__sectionContainer'>
            <h4>Program's and Features</h4>
            <div className='menu__items'>
              <p>Today's Deal</p>
              <p>Amazon Pay</p>
              <p>Try Prime</p>
              <p>#FountItOnAmazon</p>
              <p>Sell on Amazon</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='menu__right menu__rightDisplay'
        id='hamburger-menu-right'
      ></div>
    </div>
  );
}

export default Menu;
