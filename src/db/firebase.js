import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
apiKey: "AIzaSyCh67YBJsPcwQogpjlytSkl7zclblxeb6I",
authDomain: "getforms-5f406.firebaseapp.com",
projectId: "getforms-5f406",
storageBucket: "getforms-5f406.appspot.com",
messagingSenderId: "217594516564",
appId: "1:217594516564:web:0b0f735a81f090f63889c1",
measurementId: "G-1FFRDE3897",
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
