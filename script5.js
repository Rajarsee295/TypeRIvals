const main_menu=document.getElementsByClassName("main_menu");
main_menu[0].addEventListener("click",() => {
  window.location.href="openingpage.html";
});
const username_text=document.getElementsByClassName("username_text");
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
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
const db=getFirestore();
const user_uid=localStorage.getItem("user_credentials");
const profilepic=document.getElementsByClassName("profilepicture1");
const rating=document.getElementsByClassName("rating_text");
const league=document.getElementsByClassName("league_text");
const uid_text=document.getElementsByClassName("uid_text");

const func=async() => {
  try{
    const docRef = doc(db, "users", user_uid);
    const docSnap = await getDoc(docRef);
    const docData=docSnap.data();
    const imageUrl=docData.profile_picture;
    profilepic[0].src=imageUrl;
    console.log(imageUrl);
    username_text[0].innerHTML=docData.Username;
    rating[0].innerHTML=docData.Rating;
    league[0].innerHTML=docData.league;
    uid_text[0].innerHTML=user_uid;
  }catch(error){
    alert(error.message);
  }
};

func();