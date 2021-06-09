

//Use to Grab onto Firebase -> Connection
var firebaseConfig = {
  apiKey: "AIzaSyA3seU2bOMm8dkYmuZnbVuICF3jbLpY8Tk",
  authDomain: "garanceplusmaxime.firebaseapp.com",
  projectId: "garanceplusmaxime",
  storageBucket: "garanceplusmaxime.appspot.com",
  messagingSenderId: "862435938875",
  appId: "1:862435938875:web:f8bdcfc3e84f1ac8cdc21e",
  measurementId: "G-49G7R6BDZS"
};

//Init Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
var firestore = firebase.firestore();

//Strat grabbing our DOM element
const submitBtn = document.querySelector("#submit");

let userName = document.querySelector('#userName');
let userFirstName = document.querySelector('#userFirstName');
let userEmail = document.querySelector('#userEmail');
let userNumber = document.querySelector('#userNumber');
let userIsComingToCocktail = document.querySelector('#userIsComingToCocktail');
let userIsComingToDiner = document.querySelector('#userIsComingToDiner');
let userIsComingToBrunch = document.querySelector('#userIsComingToBrunch');
let userMessage = document.querySelector('#userMessage');



const db = firestore.collection("contactData");

submitBtn.addEventListener('click', function (){
  let userNameInput = userName.value;
  let userFirstNameInput = userFirstName.value;
  let userEmailInput = userEmail.value;
  let userNumberInput = userNumber.value;
  let userIsComingToCocktailInput = userIsComingToCocktail.checked;
  let userIsComingToDinerInput = userIsComingToDiner.checked;
  let userIsComingToBrunchInput = userIsComingToBrunch.checked;
  let userMessageInput = userMessage.value;

// Access the Database Collection

db.doc()
  .set({
    name: userNameInput,
    firstName: userFirstNameInput,
    email: userEmailInput,
    number: userNumberInput,
    Cocktail: userIsComingToCocktailInput,
    Diner: userIsComingToDinerInput,
    Brunch: userIsComingToBrunchInput,
    message: userMessageInput,
  })
  .then(function(){
    console.log("Data Saved");
    alert("Merci de votre réponse ! Elle est envoyée à Garance et Maxime !");
  })
  .catch (function(error) {
    console.log(error);
  });
});