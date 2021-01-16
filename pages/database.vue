<template>
  <div class="center">
    <h2>Database</h2>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAjIhMU4Co5LvhhEoqiGqbF5R6zmsQfIZY",
  authDomain: "findadoc-bc230.firebaseapp.com",
  databaseURL: "https://findadoc-bc230-default-rtdb.firebaseio.com",
  projectId: "findadoc-bc230",
  storageBucket: "findadoc-bc230.appspot.com",
  messagingSenderId: "871643437476",
  appId: "1:871643437476:web:d7271d01ee125e9f7bc931",
  measurementId: "G-SN6SHYMJKY"
};

// const firebaseApp = firebase.initializeApp(config);
const firestore = firebase.firestore();
const doctors = firestore.collection('doctors');
export default {};
</script>

<style></style>
