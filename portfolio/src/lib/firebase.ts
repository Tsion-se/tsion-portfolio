import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

/**
 * FIREBASE SETUP
 * ---------------
 * 1. Create a free project at https://console.firebase.google.com
 * 2. Enable Firestore Database (start in production mode, add the rule below).
 * 3. Project settings → General → "Your apps" → Web app → copy the config values
 *    into a `.env` file at the project root (see `.env.example`).
 * 4. Suggested Firestore security rule (Firestore → Rules) — allows anyone to
 *    submit a message but not read or edit existing ones:
 *
 *    rules_version = '2';
 *    service cloud.firestore {
 *      match /databases/{database}/documents {
 *        match /messages/{messageId} {
 *          allow create: if request.resource.data.keys().hasAll(['name','email','subject','message','timestamp'])
 *                         && request.resource.data.name is string
 *                         && request.resource.data.email is string
 *                         && request.resource.data.message.size() < 5000;
 *          allow read, update, delete: if false;
 *        }
 *      }
 *    }
 */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "",
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };
