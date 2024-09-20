
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAC3fuazqHamfAnozia5mfA6NczSSTjBLo",
  authDomain: "chatapp-fe868.firebaseapp.com",
  projectId: "chatapp-fe868",
  storageBucket: "chatapp-fe868.appspot.com",
  messagingSenderId: "465158491566",
  appId: "1:465158491566:web:c525f3105f2fe623b90c3f",
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage=getStorage()