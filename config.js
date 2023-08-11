const firebase = require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");
const dotenv = require('dotenv').config({path: './.env'});

// const stripe = require("stripe")(process.env.STRIPE_KEY);

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL:  process.env.DB_URL,
});

exports.admin = firebase;
exports.db = firebase.database();