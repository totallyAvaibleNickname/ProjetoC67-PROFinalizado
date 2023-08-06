import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyACbUSQY8S5u7sksDE4dJe7pw1O7eIcWY8",
  authDomain: "projetoc67-professional.firebaseapp.com",
  projectId: "projetoc67-professional",
  storageBucket: "projetoc67-professional.appspot.com",
  messagingSenderId: "200195415923",
  appId: "1:200195415923:web:61ac85d034a729cd0d2f06",
  measurementId: "G-PLTN9SS9BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
