import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5thlppOJ7rjsc7l2yJ47fwyHwXV9Y8uc',
  authDomain: 'task-manager-87c7b.firebaseapp.com',
  projectId: 'task-manager-87c7b',
  storageBucket: 'task-manager-87c7b.firebasestorage.app',
  messagingSenderId: '259409556221',
  appId: '1:259409556221:web:aa2e1882e2fe8c47b64494',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth and Firestore
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);




