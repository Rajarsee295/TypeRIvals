
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
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
let add_rank_element = document.getElementById("accuracy");
const func = async () => {

        try {
            let i = 1;
            const docRef = doc(db, "history", user_uid);
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data();
            
            for (let l = 0; l < docData.wpm_history.length; l++) {
                let rankElement = document.createElement('div');
                rankElement.classList.add('templates');
                rankElement.id = `match${i}`;
                rankElement.textContent = (i); 
                add_rank_element.insertAdjacentElement("afterend", rankElement); 

                let countryElement = document.createElement('div');
                countryElement.classList.add('templates');
                countryElement.id = `wpm${i}`;
                countryElement.textContent = docData.wpm_history[l]; 
                add_rank_element = document.getElementById(`match${i}`);
                add_rank_element.insertAdjacentElement("afterend", countryElement);

                let usernameElement = document.createElement('div');
                usernameElement.classList.add('templates');
                usernameElement.id = `characters${i}`;
                usernameElement.textContent = docData.correct_characters_history[l] + "/" +docData.wrong_characters_history[l] + "/" + docData.extra_characters_history[l];
                add_rank_element = document.getElementById(`wpm${i}`);
                add_rank_element.insertAdjacentElement("afterend", usernameElement);
                
                let rating_change = document.createElement('div');
                rating_change.classList.add('templates');
                rating_change.id = `rating_change${i}`;
                rating_change.textContent = docData.rating_change_history[l];
                add_rank_element = document.getElementById(`characters${i}`);
                add_rank_element.insertAdjacentElement("afterend", rating_change);

                let rankNumElement = document.createElement('div');
                rankNumElement.classList.add('templates');
                rankNumElement.id = `accuracy${i}`;
                rankNumElement.textContent = docData.accuracy_history[l];
                add_rank_element = document.getElementById(`rating_change${i}`);
                add_rank_element.insertAdjacentElement("afterend", rankNumElement);
                add_rank_element = document.getElementById(`accuracy${i}`);
                i++; 
            }
    } catch (error) {
        alert(error.message)
    }
};
func();

document.getElementsByClassName("return")[0].addEventListener("click",()=>{
   window.location.href="profile.html"
});