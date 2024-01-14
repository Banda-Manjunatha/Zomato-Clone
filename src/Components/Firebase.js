import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoW42AD0lB0HFrq4Mb7WGuBOdKj0TFacg",
  authDomain: "auth-zomato.firebaseapp.com",
  projectId: "auth-zomato",
  storageBucket: "auth-zomato.appspot.com",
  messagingSenderId: "988283102612",
  appId: "1:988283102612:web:15fb4003e157d3bb329b81",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
