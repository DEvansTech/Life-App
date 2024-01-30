// import { resolve } from "path";
// import { config } from "dotenv";
// const APP_ENV = APP_ENV ?? "development";
// const envPath = resolve(__dirname, `.${APP_ENV}`);

// config({ path: envPath });
import { 
  FIREBASE_API_KEY, 
  FIREBASE_AUTH_DOMAIN, 
  FIREBASE_DATABASE_URL, 
  FIREBASE_PROJECT_ID, 
  FIREBASE_STORAGE_BUCKET, 
  FIREBASE_MESSAGING_SENDER_ID, 
  FIREBASE_APPID, 
  FIREBASE_MEASUREMENT_ID
 } from '@env'

const firebaseEnv = {
  apiKey: FIREBASE_API_KEY || "",
  authDomain: FIREBASE_AUTH_DOMAIN || "",
  databaseURL: FIREBASE_DATABASE_URL || "",
  projectId: FIREBASE_PROJECT_ID || "",
  storageBucket: FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID || "",
  appId: FIREBASE_APPID || "",
  measurementId: FIREBASE_MEASUREMENT_ID || ""
};

export default {
  firebaseEnv
}