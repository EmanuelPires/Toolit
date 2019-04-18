import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCcWGHxDcbREMbTFO0OJ6bsEYuozMHOqdY",
    authDomain: "toolrental-9f0be.firebaseapp.com",
    databaseURL: "https://toolrental-9f0be.firebaseio.com",
    projectId: "toolrental-9f0be",
    storageBucket: "toolrental-9f0be.appspot.com",
    messagingSenderId: "434246845333"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export  {
      storage, firebase as default
  };


