import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY
  }),
  databaseURL: process.env.DATABASE_URL
});

console.log(admin.app().name);

let db = admin.database();
let ref = db.ref("hoges");
ref.once("value", (snapshot) => {
  console.log(snapshot.val());
});