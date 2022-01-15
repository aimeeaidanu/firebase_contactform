// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAFtluNgj3v7daLBCK4qutnbvSHTK0TogU",
  authDomain: "contactform-e4256.firebaseapp.com",
  databaseURL: "https://contactform-e4256-default-rtdb.firebaseio.com",
  projectId: "contactform-e4256",
  storageBucket: "contactform-e4256.appspot.com",
  messagingSenderId: "691423889915",
  appId: "1:691423889915:web:8bd8ecc4a2e96b9422e35e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
