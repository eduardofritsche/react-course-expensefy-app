import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  // appId: "1:322044053912:web:1a9422ff160e40e1f343ed",
  // measurementId: "G-5SSF6ST8EH"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .push({
//     description: 'asdf',
//     amount: 123
//   });

// database.ref('expenses')
//   .push({
//     description: 'qwer',
//     amount: 123
//   });

// database.ref().remove(); 
  
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
