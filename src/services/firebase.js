import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDhWPrZKLKp8GlQTPDBzCBXNpa-dxUAmHk',
  authDomain: 'testdisc-c406a.firebaseapp.com',
  projectId: 'testdisc-c406a',
  storageBucket: 'testdisc-c406a.appspot.com',
  messagingSenderId: '1011045935504',
  appId: '1:1011045935504:web:32da7200bdf35e9fea2b15'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export {firebase, auth, database}