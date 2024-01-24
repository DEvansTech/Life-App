// const z = require("zod");

const path = require("path");
const APP_ENV = process.env.APP_ENV ?? "development";
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

require("dotenv").config({
  path: envPath,
});

const firebaseEnv = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

const firebaseProjectUrl = process.env.FIREBASE_PROJECT_URL;

module.exports = {
    firebaseEnv,
    firebaseProjectUrl
}