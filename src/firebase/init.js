import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const firebaseConfig = {
  apiKey: 'AIzaSyDIu6xk37dpeRl1tibLBt09xmz2qf22rnQ',
  authDomain: 'mlkit-aea7d.firebaseapp.com',
  databaseURL: 'https://mlkit-aea7d.firebaseio.com',
  projectId: 'mlkit-aea7d',
  storageBucket: 'mlkit-aea7d.appspot.com',
  messagingSenderId: '494164903020',
  appId: '1:494164903020:web:9301a162286e7c62f84449',
  measurementId: 'G-6676F50KNW'
}

firebase.initializeApp(firebaseConfig)
