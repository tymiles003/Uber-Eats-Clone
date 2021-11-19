import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARjZFrWfvv9Btj4ziLGnlIS277L4wHG9k",
  authDomain: "react-native-uber-eats-e6cc4.firebaseapp.com",
  projectId: "react-native-uber-eats-e6cc4",
  storageBucket: "react-native-uber-eats-e6cc4.appspot.com",
  messagingSenderId: "102439941836",
  appId: "1:102439941836:web:a5d21217a0b69d3225f469",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
