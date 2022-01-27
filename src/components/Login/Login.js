import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebaseFile';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created your account
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
    console.log(auth);
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='amazon-logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions
          of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>
        <div className='login__hr'></div>
        <div className='login__newUser'>New to Amazon?</div>
        <Link to='/signup'>
          <button className='login__registerButton'>
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
