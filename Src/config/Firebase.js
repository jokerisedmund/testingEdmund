import firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBHNc7Jj0PVwNg8Be86p5OGJR2n04PxE1Q",
    authDomain: "smart-parking-c582f.firebaseapp.com",
    databaseURL: "https://smart-parking-c582f.firebaseio.com",
    projectId: "smart-parking-c582f",
    storageBucket: "",
    messagingSenderId: "214979547268",
    appId: "1:214979547268:web:65dd7b96e215c4b7e5b2d1"
	
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
 /*db.settings({
	timestampsInSnapshots: true
})*/

export default Firebase
