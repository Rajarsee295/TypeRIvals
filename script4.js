let rating = 0;
let league = "bronze";
const score = document.getElementsByClassName("score");
score[0].innerHTML = localStorage.getItem("wpm");

const time_taken = document.getElementsByClassName("time_taken");
time_taken[0].innerHTML = localStorage.getItem("time_woohoo");
console.log(localStorage.getItem("time_woohoo"))

const raw1 = document.getElementsByClassName("raw_");
raw1[0].innerHTML = localStorage.getItem("raw");

const play_again = document.getElementsByClassName("play_again");
play_again[0].addEventListener("click", function () {
  window.location.href = "typingpage.html";
});

const sign_out = document.getElementsByClassName("sign_out");
sign_out[0].addEventListener("click", function () {
  localStorage.getItem("user_credentials") = "";
  window.location.href = "index.html";
});

const main_menu = document.getElementsByClassName("main_menu");
main_menu[0].addEventListener("click", () => {
  window.location.href = "openingpage.html";
});

const doct = document.getElementsByClassName("acc");
doct[0].innerHTML = localStorage.getItem("accuracy");

const chars = document.getElementsByClassName("characters");
chars[0].innerHTML = localStorage.getItem("correct_character") + " / " + localStorage.getItem("wrong_letters") + " / " + localStorage.getItem("extra_letters");

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDXyjbDjJdXIBZTY-mMucSPxHW0CceOfeE",
  authDomain: "typerivals-9c4a8.firebaseapp.com",
  projectId: "typerivals-9c4a8",
  storageBucket: "typerivals-9c4a8.firebasestorage.app",
  messagingSenderId: "1028469431639",
  appId: "1:1028469431639:web:410edda7f7fc046b883212",
  measurementId: "G-M0VBHV41BH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const user_uid = localStorage.getItem("user_credentials");
const func = async () => {
  try {
    const docRef = doc(db, "users", user_uid);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    let array = [];
    array = docData.wpm_history;
    array.push(localStorage.getItem("wpm"));
    rating = docData.Rating;
    let r = rating;
    let rating_diff = 0;
    if (array.length == 1) {
      rating = parseInt(array[array.length - 1], 10);
    }
    else {

      const lastWpm = parseInt(array[array.length - 1], 10); // Last WPM
      const previousWpm = parseInt(array[array.length - 2], 10); // Previous WPM
      rating_diff = lastWpm - previousWpm;
    }
    rating = rating + rating_diff;
    if (rating < 0) {
      rating = 0;
    }
    else if (rating >= 100 && rating <= 200) {
      league = "Silver";
    }
    else if (rating >= 200 && rating <= 300) {
      league = "Gold";
    }
    else if (rating >= 300 && rating <= 400) {
      league = "Platinum";
    }
    else if (rating >= 500 && rating <= 600) {
      league = "Diamond";
    }
    else if (rating >= 600 && rating <= 700) {
      league = "Ascendant";
    }
    else if (rating >= 700) {
      league = "Radiant";
    }
    let diff = rating - r;
    const rating_text = document.getElementsByClassName("rating_text");
    const rating_change = document.getElementsByClassName("rating_change");
    rating_text[0].innerHTML = rating;
    if (diff < 0) {
      rating_change[0].style.color = "red";
      rating_change[0].innerHTML = diff;
    }
    else if (diff == 0) {
      rating_change[0].style.color = "blue";
      rating_change[0].innerHTML = "+" + diff;
    }
    else {
      rating_change[0].style.color = "green";
      rating_change[0].innerHTML = "+" + diff;
    }
    localStorage.setItem("rating_diff_2", diff);
    await updateDoc(docRef, {
      wpm_history: array,
      Rating: rating,
      league: league,
    });
    const docRef2 = doc(db, "leaderboard", user_uid);
    const docSnap2 = await getDoc(docRef);
    const docData2 = docSnap.data();
    await updateDoc(docRef2, {
      Rating: rating,
    })
  } catch (error) {
    alert(error.message);
  }
};

const func1 = async () => {
  const docRef = doc(db, "history", user_uid);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();

  let array = [];
  array = docData.wpm_history;
  array.push(localStorage.getItem("wpm"));


  let acc_array = [];
  acc_array = docData.accuracy_history;
  acc_array.push(localStorage.getItem("accuracy"));

  let rating_change_array = [];
  rating_change_array = docData.rating_change_history;
  rating_change_array.push(localStorage.getItem("rating_diff_2"));

  let correct_characters_array = [];
  correct_characters_array = docData.correct_characters_history;
  correct_characters_array.push(localStorage.getItem("correct_character"));

  let wrong_characters_array = [];
  wrong_characters_array = docData.wrong_characters_history;
  wrong_characters_array.push(localStorage.getItem("wrong_letters"));

  let extra_characters_array = [];
  extra_characters_array = docData.extra_characters_history;
  extra_characters_array.push(localStorage.getItem("extra_letters"));
  await updateDoc(docRef, {
    accuracy_history: acc_array,
    correct_characters_history: correct_characters_array,
    extra_characters_history: extra_characters_array,
    rating_change_history: rating_change_array,
    wpm_history: array,
    wrong_characters_history: wrong_characters_array,
  });
}
func();
func1();