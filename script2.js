const login_button = document.getElementsByClassName("login");
const main1 = document.getElementsByClassName("main");
const login_page = document.getElementsByClassName("login_page_container");
const sign_in_page = document.getElementsByClassName("sigin_page_container");

const signup_button_2 = document.getElementsByClassName("sign_up_button");
const cancel_button = document.getElementsByClassName("cancel_button");
const return_button = document.getElementsByClassName("return_button");
const signup_button = document.getElementsByClassName("signup");

const el_input = document.getElementsByClassName("el_input");
const ps_input = document.getElementsByClassName("ps_input");

login_button[0].addEventListener("click", function () {
  main1[0].classList.add("hide");
  login_page[0].classList.add("show");
});

cancel_button[0].addEventListener("click", function () {
  main1[0].classList.remove("hide");
  login_page[0].classList.remove("show");
});

signup_button[0].addEventListener("click", function () {
  main1[0].classList.add("hide");
  sign_in_page[0].classList.add("show");
});

return_button[0].addEventListener("click", function () {
  main1[0].classList.remove("hide");
  sign_in_page[0].classList.remove("show");
  if (login_page[0].classList.contains("show")) {
    login_page[0].classList.remove("show");
  }
});

signup_button_2[0].addEventListener("click", function () {
  login_page[0].classList.remove("show");
  sign_in_page[0].classList.add("show");

});


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXyjbDjJdXIBZTY-mMucSPxHW0CceOfeE",
  authDomain: "typerivals-9c4a8.firebaseapp.com",
  projectId: "typerivals-9c4a8",
  storageBucket: "typerivals-9c4a8.firebasestorage.app",
  messagingSenderId: "1028469431639",
  appId: "1:1028469431639:web:410edda7f7fc046b883212",
  measurementId: "G-M0VBHV41BH"
};
const cloudName = 'dh6gqok6h';
const uploadPreset = 'hello_world';
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const status = document.getElementById('status');
let imageUrl = '';

uploadButton.addEventListener('click', async () => {
  const file = fileInput.files[0];
  if (!file) {
    status.textContent = "Please select a file.";
    return;
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  try {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
    imageUrl = response.data.secure_url;
    console.log('Uploaded image URL:', imageUrl);
  } catch (error) {
    alert(error);
  }

});


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, addDoc, doc, collection } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
const auth = getAuth();
const db = getFirestore(app);
const main_sign_in_btn = document.getElementsByClassName("sign_in_button");
const sign_in_email = document.getElementsByClassName("eml_input");
const sign_in_password = document.getElementsByClassName("ps_input");
const user_input = document.getElementsByClassName("user_input");

let selected_country = "";
document.getElementById('country-selector').addEventListener('change', (event) => {
  selected_country = event.target.value;
  console.log(selected_country);
});

main_sign_in_btn[0].addEventListener("click", function () {
  let email = sign_in_email[0].value.trim();
  let password = sign_in_password[0].value.trim();
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

    const user = userCredential.user;
    console.log(user.uid);
    const addDocumentWithFields = async () => {
      try {
        const docRef = doc(db, "users", userCredential.user.uid);
        await setDoc(docRef, {
          Username: user_input[0].value.trim(),
          Rating: 0,
          profile_picture: imageUrl,
          league: "Bronze",
          wpm: [],
        });
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error adding document:", error);
      }
    };
    addDocumentWithFields();


    const addDocumentWithFields_2 = async () => {
      try {
        const docRef = doc(db, "leaderboard", userCredential.user.uid);
        await setDoc(docRef, {
          Username: user_input[0].value.trim(),
          Rating: 0,
          country:selected_country,
        });
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error adding document:", error);
      }
    };
    addDocumentWithFields_2();

   
    const addDocumentWithFields_3 = async () => {
      try {
        const docRef = doc(db, "history", userCredential.user.uid);
        await setDoc(docRef, {
          wpm_history: [],
          correct_characters_history:[],
          wrong_characters_history:[],
          extra_characters_history:[],
          rating_history:[],
          rating_change_history:[],
          accuracy_history:[],
        });
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error adding document:", error);
      }
    };
    addDocumentWithFields_3();
    sign_in_page[0].classList.remove("show");
    login_page[0].classList.add("show");
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const login_button_2 = document.getElementsByClassName("login_button");
const email_input_login = document.getElementsByClassName("email_input_login");
const password_input_login = document.getElementsByClassName("password_input_login");

login_button_2[0].addEventListener("click", function () {
  signInWithEmailAndPassword(auth, email_input_login[0].value.trim(), password_input_login[0].value.trim()).then((userCredential) => {
    localStorage.setItem("user_credentials", userCredential.user.uid);
    console.log("successful");
    window.location.href = "openingpage.html";
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});


