import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAHfocN4cMLck2GvqAa4zAZ_ZaDSnP67Jg",
  authDomain: "test-bebd1.firebaseapp.com",
  projectId: "test-bebd1",
  storageBucket: "test-bebd1.appspot.com",
  messagingSenderId: "543678648748",
  appId: "1:543678648748:web:7933b88c9c3a8e2c97aa09",
  measurementId: "G-3TE9VWPNS2"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export default(firebase)
