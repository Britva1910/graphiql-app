/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app';

/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}; */
const firebaseConfig = {
  apiKey: 'AIzaSyDBgTH9UlxQXskJn2dBcZ_iGKPNX0eZj3A',
  authDomain: 'graphiql-16937.firebaseapp.com',
  projectId: 'graphiql-16937',
  storageBucket: 'graphiql-16937.appspot.com',
  messagingSenderId: '639693401330',
  appId: '1:639693401330:web:9392dad8d631663ec5746b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
