import firebase from "firebase/app";
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

const firebaseApp = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config);

const db = firebaseApp.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;

const doctorsCollection = db.collection("doctors");

export const getAll = callback => {
  doctorsCollection.get().then(callback);
};

export const create = (doctor, callback = () => {}) => {
  doctorsCollection.add(doctor).then(callback);
};

export const get = (id, callback) => {
  doctorsCollection
    .doc(id)
    .get()
    .then(callback);
};

export const update = (id, doctor, callback = () => {}) => {
  doctorsCollection.doc(id).update(doctor).then(callback);
};

export const remove = (id, callback = () => {}) => {
  doctorsCollection.doc(id).delete().then(callback);
};
