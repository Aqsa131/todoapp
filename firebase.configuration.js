import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyBduNITpUaHtNa7OAl8HxyTTba1LNrwsaA",
  authDomain: "todo-app-a787d.firebaseapp.com",
  projectId: "todo-app-a787d",
  storageBucket: "todo-app-a787d.firebasestorage.app",
  messagingSenderId: "676778118499",
  appId: "1:676778118499:web:227c1d3a713ca402abd756"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export{getAuth, createUserWithEmailAndPassword}