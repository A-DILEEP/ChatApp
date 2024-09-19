
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3obAp1o9RSFeGV0UqrryJci70A07h9Ss",
  authDomain: "chat-app-29046.firebaseapp.com",
  projectId: "chat-app-29046",
  storageBucket: "chat-app-29046.appspot.com",
  messagingSenderId: "680833501935",
  appId: "1:680833501935:web:b0f57605632ef4ae10a91a",
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage=getStorage()