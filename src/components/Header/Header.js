import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebaseFile';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu/Menu';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  function handleAuthentication() {
    if (user) {
      auth.signOut();
    }
  }

  //Trim display name
  // function TrimName(name) {
  //   console.log('TYPE OF NAME >>>>', typeof name);
  //   console.log('NAME>>>', name);
  //   name = JSON.parse(name);
  //   // console.log('TYPE OF NAME >>>>', typeof name);
  //   var newName = '';
  //   for (var x of name) {
  //     if (x === '$') break;
  //     newName += x;
  //   }
  //   return newName;
  // }
  //Open hamburger Menu

  function openMenu() {
    document
      .getElementById('hamburger-menu')
      .classList.toggle('close');
    document
      .getElementById('hamburger-menu-right')
      .classList.toggle('menu__rightDisplay');
  }
  return (
    <div className='header'>
      {/* Amazon Logo  */}
      <div className='header__menuSection'>
        <div onClick={openMenu} className='header__menu'>
          <MenuIcon className='header__menuIcon' />
        </div>
        <Menu />

        <div className='header__amazonLogo'>
          <Link to='/'>
            <img
              className='header__logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              alt='amazon-logo'
            />
          </Link>
          <span className='header__in'>.in</span>
        </div>
      </div>

      <div className='header__navLocation'>
        <LocationOnOutlinedIcon className='header__locationIcon' />
        <div className='header__location header__option'>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>
            Select your address
          </span>
        </div>
      </div>

      {/* Search  */}
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>

      {/* Nav  */}
      <div className='header__right'>
        <div className='header__nav'>
          <Link to={!user && '/login'}>
            <div
              onClick={handleAuthentication}
              className='header__option'
            >
              <span className='header__optionLineOne'>
                Hello, {user ? user.displayName : 'Guest'}
              </span>
              <span className='header__optionLineTwo'>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
          <Link to='/orders'>
            <div className='header__option header__returnOrder'>
              <span className='header__optionLineOne'>Returns &</span>
              <span className='header__optionLineTwo'>Orders</span>
            </div>
          </Link>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </div>

        {/* CheckOut Section  */}
        <Link to='/checkout'>
          <div className='header__optionCart'>
            <AddShoppingCartIcon
              className='header__optionCartIcon'
              style={{ fontSize: 40 }}
            />
            <span className='header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
