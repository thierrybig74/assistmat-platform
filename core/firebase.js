import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPTMRZfxbnv2Go8YzGqMLe_BwDCaNBKnA",
  authDomain: "assistmat-suite.firebaseapp.com",
  projectId: "assistmat-suite",
  storageBucket: "assistmat-suite.firebasestorage.app",
  messagingSenderId: "800585330619",
  appId: "1:800585330619:web:9d79d7a6a54340b34ade9e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc };
