import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHrbdl_lsLAnDVPnK_sfq2Ku4ThmQdWjA',
  authDomain: 'clone-75de4.firebaseapp.com',
  projectId: 'clone-75de4',
  storageBucket: 'clone-75de4.appspot.com',
  messagingSenderId: '646093986120',
  appId: '1:646093986120:web:f8878d2899fd3209b93b7d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
