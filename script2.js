const login_button=document.getElementsByClassName("login");
const main1=document.getElementsByClassName("main");
const login_page=document.getElementsByClassName("login_page_container");
const sign_in_page=document.getElementsByClassName("sigin_page_container");

const signup_button_2=document.getElementsByClassName("sign_up_button");
const cancel_button=document.getElementsByClassName("cancel_button");
const return_button=document.getElementsByClassName("return_button");
const signup_button=document.getElementsByClassName("signup");

const el_input=document.getElementsByClassName("el_input");
const ps_input=document.getElementsByClassName("ps_input");

let data1="";
let data2="";

login_button[0].addEventListener("click",function(){
   main1[0].classList.add("hide");
   login_page[0].classList.add("show");
});

cancel_button[0].addEventListener("click",function(){
   main1[0].classList.remove("hide");
   login_page[0].classList.remove("show");
});

signup_button[0].addEventListener("click",function(){
    main1[0].classList.add("hide");
    sign_in_page[0].classList.add("show");
 });

return_button[0].addEventListener("click",function(){
    main1[0].classList.remove("hide");
    sign_in_page[0].classList.remove("show");
    if(login_page[0].classList.contains("show")){
        login_page[0].classList.remove("show");
    }
});

signup_button_2[0].addEventListener("click",function(){
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

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

 const auth = getAuth();

const main_sign_in_btn=document.getElementsByClassName("sign_in_button");
const sign_in_email=document.getElementsByClassName("eml_input");
const sign_in_password=document.getElementsByClassName("ps_input");

main_sign_in_btn[0].addEventListener("click",function(){
  let email=sign_in_email[0].value.trim();
  let password=sign_in_password[0].value.trim();
  createUserWithEmailAndPassword(auth, email, password)
 
});
