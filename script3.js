const  play_button=document.getElementsByClassName("play");
const sign_out_button=document.getElementsByClassName("sign_out");
const leaderboard_button=document.getElementsByClassName("leaderboard");
const profile=document.getElementsByClassName("profile");

profile[0].addEventListener("mousedown",()=>{
   window.location.href="profile.html";
});

play_button[0].addEventListener("click",function(){
  window.location.href="typingpage.html";
});

sign_out_button[0].addEventListener("click",function(){
    window.location.href="index.html";
  });

const username_text=document.getElementsByClassName("username");
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

const func=async() => {
  try{
    const docRef = doc(db, "users", user_uid);
    const docSnap = await getDoc(docRef);
    const docData=docSnap.data();
    const imageUrl=docData.profile_picture;
    profilepic[0].src=imageUrl;
    console.log(imageUrl);
    username_text[0].innerHTML=docData.Username;
  }catch(error){
    alert(error.message);
  }
};

func();