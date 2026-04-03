import { auth } from "/core/firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

async function loginWithGoogle() {
  return await signInWithPopup(auth, provider);
}

function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

async function logoutUser() {
  return await signOut(auth);
}

export { loginWithGoogle, watchAuth, logoutUser };
