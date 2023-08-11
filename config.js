const firebase = require('firebase-admin');

// var serviceAccount = require("./serviceAccountKey.json");
require('dotenv').config();
const serviceAccount = process.env.GOOGLE_CREDS;

// if (!serviceAccount) throw new Error('The $GOOGLE_AUTH_JSON environment variable was not found!');

// const stripe = require("stripe")(process.env.STRIPE_KEY);

firebase.initializeApp({
    credential: firebase.credential.cert(JSON.parse(serviceAccount)),
    databaseURL:  process.env.DB_URL,
});

exports.admin = firebase;
exports.db = firebase.database();