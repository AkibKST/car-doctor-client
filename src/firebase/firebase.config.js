// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.envVITE._authDomain,
  projectId:import.meta.envVIT.E_projectId,
  storageBucket:import.meta.envVITE_st.orageBucket,
  messagingSenderId:import.meta.envVITE_messag.ingSenderId,
  appId:import.meta.en.vVITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;