import { initializeApp } from 'firebase/app';
import 'firebase/database';
import { getDatabase } from 'firebase/database';

const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAdmcOOE7pS_7jR-IRzZ5aDbkl4QBUkM-Q",
    authDomain: "pravaler-527f9.firebaseapp.com",
    projectId: "pravaler-527f9",
    storageBucket: "pravaler-527f9.appspot.com",
    messagingSenderId: "602751954203",
    appId: "1:602751954203:web:fc301852168afc3b8cf7be",
    databaseURL: 'https://pravaler-527f9-default-rtdb.firebaseio.com/'
  };

  // Inicialize o Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  return { app, db };
};

export const { app, db } = initializeFirebase();