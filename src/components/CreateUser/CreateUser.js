import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebaseFile';
import './CreateUser.css';

function CreateUser() {
  const history = useHistory();

  const [name, setName] = useState({
    fname: '',
    lname: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  function register(e) {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created your account
        // auth.user.displayName = name.fname;
        console.log('CHANGED NAME>>>', name.fname);
        auth.user.updateProfile({
          displayName: name.fname,
        });
        if (auth) {
          // console.log('DIS NAME>>>', auth.user.displayName);
          history.push('/');
        }

        window.location.reload();
      })
      .catch((error) => alert(error.message));
  }

  function handleName(event) {
    const name = event.target.name;
    const value = event.target.value;

    setName((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function isValidated() {
    if (
      name.fname === '' ||
      email === '' ||
      password === '' ||
      passwordAgain === ''
    )
      return false;
    return true;
  }

  function handleContinueButton(e) {
    if (password !== passwordAgain) alert('Passwords do not match');
    else {
      if (isValidated()) register(e);
      else alert('Invalid Fields');
    }
  }
  return (
    <div className='createUser'>
      <Link to='/'>
        <img
          className='createUser__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='amazon-logo'
        />
      </Link>
      <div className='createUser__container'>
        <h1>Create Account</h1>
        <form>
          <h5>First Name</h5>
          <input
            type='text'
            name='fname'
            value={name.fname}
            onChange={handleName}
            required
          />
          <h5>last Name</h5>
          <input
            type='text'
            name='lname'
            value={name.lname}
            onChange={handleName}
          />

          <h5>Email</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />

          <h5>Password again</h5>
          <input
            type='password'
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            required={true}
          />

          <button
            type='submit'
            onClick={handleContinueButton}
            className='createUser__signUpButton'
          >
            Continue
          </button>
        </form>

        <p className='createUser__privacy'>
          By creating an account or logging in, you agree to{' '}
          <span>Amazon Clone's</span> Conditions of Use and{' '}
          <span>Privacy Policy</span>.
        </p>

        <div className='createUser__hr'></div>
        <p className='createUser__bottom'>
          Already have an account?{' '}
          <Link to='/login' className='createUser__signInLink'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreateUser;
