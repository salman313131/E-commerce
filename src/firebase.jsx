import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYjaLcAC5qmLJlbncFS7ReOiqRNXFDyBg",
  authDomain: "auth-1b863.firebaseapp.com",
  databaseURL: "https://auth-1b863-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-1b863",
  storageBucket: "auth-1b863.appspot.com",
  messagingSenderId: "1016387171005",
  appId: "1:1016387171005:web:b46213869cd52c631bbdd4",
  measurementId: "G-BVSWH6T0WL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)