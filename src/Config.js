
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBe_SBG34BWiMhoTC5HmgGTv3Xa3-yWmIw",
  authDomain: "notesapp-73cf9.firebaseapp.com",
  databaseURL: "https://notesapp-73cf9.firebaseio.com",
  projectId: "notesapp-73cf9",
  storageBucket: "notesapp-73cf9.appspot.com",
  messagingSenderId: "1085720789012",
  appId: "1:1085720789012:web:20f6e41cf166e1c36de701",
  measurementId: "G-GKTWMCC0K6"
};


var fire=firebase.initializeApp(firebaseConfig)
export default fire;