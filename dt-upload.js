var admin = require("firebase-admin");

var serviceAccount = require("./food-delivery-e6cef-firebase-adminsdk-gzpxi-9404ea3454.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://food-delivery-e6cef.firebaseio.com"
});

const data = require("./receipts.json");


data.forEach(foodProduct => {
    console.log(foodProduct)
    admin.firestore()
        .collection('food')
        .doc(foodProduct.name.toLowerCase())
        .set({ ...foodProduct })
        .then((res) => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
});