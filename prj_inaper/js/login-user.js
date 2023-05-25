// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Inaper's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdYUugZLXLa-TJrmRFdNRcSpWXrXa6kNE",
  authDomain: "inaper-178f2.firebaseapp.com",
  databaseURL: "https://inaper-178f2-default-rtdb.firebaseio.com",
  projectId: "inaper-178f2",
  storageBucket: "inaper-178f2.appspot.com",
  messagingSenderId: "438219555107",
  appId: "1:438219555107:web:48794961856a0a8a928c96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('before')
firebase.auth().signInWithEmailAndPassword('leonardoantoniovs@yahoo.com','Prj_inaper0123').then(response => {
  console.log('success', response)
}).catch(error => {
  console.log('error', error)
})
console.log('after')
