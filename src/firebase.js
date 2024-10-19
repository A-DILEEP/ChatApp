import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
