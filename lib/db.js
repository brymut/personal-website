var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore());
// var app = firebase.initializeApp(config);
// db = firebase.firestore(app);