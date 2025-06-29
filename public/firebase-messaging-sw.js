importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: "AIzaSyDysrQ87JffE5LNfG6RoZv45JSPaSoNTtI",
  authDomain: "emarket-b1ba0.firebaseapp.com",
  projectId: "emarket-b1ba0",
  storageBucket: "emarket-b1ba0.firebasestorage.app",
  messagingSenderId: "288041937070",
  appId: "1:288041937070:web:8f06a88297b476b06a253f",
  measurementId: "G-3G47GPMWL0"
};

firebase?.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});
