// Firebase client. Replace the values in `firebaseConfig` with your project's
// credentials from the Firebase console (Project settings → Your apps → Web).
// All values below are publishable and safe to ship in the bundle.
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

export function getFirebase() {
  if (typeof window === "undefined") return { app: null, db: null, storage: null };
  if (!app) {
    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
    db = getFirestore(app);
    storage = getStorage(app);
  }
  return { app, db, storage };
}

export const isFirebaseConfigured = () =>
  !firebaseConfig.apiKey.startsWith("YOUR_");
