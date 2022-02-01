import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyALciuULwPLwDvILrKGT0q163PCZfzw9W8",
  authDomain: "clone-9eeca.firebaseapp.com",
  projectId: "clone-9eeca",
  storageBucket: "clone-9eeca.appspot.com",
  messagingSenderId: "34820048043",
  appId: "1:34820048043:web:b923239c7dbaced82ca3ee"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
