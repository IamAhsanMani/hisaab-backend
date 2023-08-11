const firebase = require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://hisaab-a86f5-default-rtdb.firebaseio.com',
});

exports.admin = firebase;
exports.db = firebase.database();