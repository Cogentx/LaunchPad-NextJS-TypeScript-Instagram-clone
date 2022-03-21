import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDh4V2AGPzTOfAmK1ohE67or3jQ975DvQU',
  authDomain: 'portfolio-clones.firebaseapp.com',
  databaseURL: 'https://portfolio-clones.firebaseio.com',
  projectId: 'portfolio-clones',
  storageBucket: 'portfolio-clones.appspot.com',
  messagingSenderId: '1080338138283',
  appId: '1:1080338138283:web:a42e6908b2d9416c00a3ee',
  measurementId: 'G-YZLCYWD7NC',
};

// Initialize Firebase with Singleton Pattern
// - if firebase app already initialized use otherwise, initialize it
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

