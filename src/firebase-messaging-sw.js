importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyAm-DsPzToPzMYEFIp5YtMFgLv7ui8qJeM",
  authDomain: "shoppy-ship.firebaseapp.com",
  databaseURL: "https://shoppy-ship-default-rtdb.firebaseio.com",
  projectId: "shoppy-ship",
  storageBucket: "shoppy-ship.appspot.com",
  messagingSenderId: "811159882038",
  appId: "1:811159882038:web:a90750753cf270cb430b97",
  measurementId: "G-WWP5TG6EN8"
});
const messaging = firebase.messaging();