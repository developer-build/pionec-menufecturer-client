import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyIFx0Z-vt2T_MPa73I0s2-2nsD4WaK2o",
  authDomain: "pionec-menufecturer.firebaseapp.com",
  projectId: "pionec-menufecturer",
  storageBucket: "pionec-menufecturer.appspot.com",
  messagingSenderId: "517084584999",
  appId: "1:517084584999:web:6eca5dcc7ecd8462614202",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
