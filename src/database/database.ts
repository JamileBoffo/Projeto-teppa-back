import firebase from 'firebase-admin';

const serviceAccount = require("./data.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
  });

const config = firebase.firestore()

export const db = config.collection('empresas')

