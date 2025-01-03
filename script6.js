/*const add_rank_element=document.getElementById("rating");
add_rank_element.insertAdjacentHTML(
    "afterend",
    "<div class='header_leaderboard' id='target'>1</div>"
);*/



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


let selected_choice = "world_wide";
document.getElementById('country-selector').addEventListener('change', (event) => {
    selected_choice = event.target.value;
    func();
    console.log(selected_choice);
});



const user_uid = localStorage.getItem("user_credentials");



const func = async () => {
    const templates_classes=document.querySelectorAll(".templates"); 
    let add_rank_element = document.getElementById("rating");   
    try {
        const querySnapshot = await getDocs(collection(db, "leaderboard"));
        const players = [];
        querySnapshot.forEach(doc => {
            players.push(doc.data());
        });
        players.sort((a, b) => b.Rating - a.Rating);
        
        if(templates_classes.length>0){
            templates_classes.forEach((index)=>{
               index.remove();
            });
        }

        if (selected_choice == "world_wide") {
            let i = 1;
            players.forEach((player, index) => {
                // Create rank div
                let rankElement = document.createElement('div');
                rankElement.classList.add('templates');
                rankElement.id = `rank${i}`;
                rankElement.textContent = i; // Set rank text
                add_rank_element.insertAdjacentElement("afterend", rankElement); // Insert after

                // Create country div
                let countryElement = document.createElement('div');
                countryElement.classList.add('templates');
                countryElement.id = `country${i}`;
                countryElement.textContent = player.country; // Placeholder for country
                add_rank_element = document.getElementById(`rank${i}`);
                add_rank_element.insertAdjacentElement("afterend", countryElement);

                // Create username div
                let usernameElement = document.createElement('div');
                usernameElement.classList.add('templates');
                usernameElement.id = `username${i}`;
                usernameElement.textContent = player.Username; // Assuming the player object has a `username` property
                add_rank_element = document.getElementById(`country${i}`);
                add_rank_element.insertAdjacentElement("afterend", usernameElement);

                // Create rank number for player
                let rankNumElement = document.createElement('div');
                rankNumElement.classList.add('templates');
                rankNumElement.id = `rankNum${i}`;
                rankNumElement.textContent = player.Rating;
                add_rank_element = document.getElementById(`username${i}`);
                add_rank_element.insertAdjacentElement("afterend", rankNumElement);
                add_rank_element = document.getElementById(`rankNum${i}`);
                i++; // Increment rank
            });
        }
        else {
            let i = 1;
            const docRef = doc(db, "users", user_uid);
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data();
            add_rank_element = document.getElementById("rating");
            players.forEach((player, index) => {
              
                if (player.country == docData.country) {
                    // Create rank div
                    let rankElement = document.createElement('div');
                    rankElement.classList.add('templates');
                    rankElement.id = `rank${i}`;
                    rankElement.textContent = i; // Set rank text
                    add_rank_element.insertAdjacentElement("afterend", rankElement); // Insert after

                    // Create country div
                    let countryElement = document.createElement('div');
                    countryElement.classList.add('templates');
                    countryElement.id = `country${i}`;
                    countryElement.textContent = player.country; // Placeholder for country
                    add_rank_element = document.getElementById(`rank${i}`);
                    add_rank_element.insertAdjacentElement("afterend", countryElement);

                    // Create username div
                    let usernameElement = document.createElement('div');
                    usernameElement.classList.add('templates');
                    usernameElement.id = `username${i}`;
                    usernameElement.textContent = player.Username; // Assuming the player object has a `username` property
                    add_rank_element = document.getElementById(`country${i}`);
                    add_rank_element.insertAdjacentElement("afterend", usernameElement);

                    // Create rank number for player
                    let rankNumElement = document.createElement('div');
                    rankNumElement.classList.add('templates');
                    rankNumElement.id = `rankNum${i}`;
                    rankNumElement.textContent = player.Rating;
                    add_rank_element = document.getElementById(`username${i}`);
                    add_rank_element.insertAdjacentElement("afterend", rankNumElement);
                    add_rank_element = document.getElementById(`rankNum${i}`);
                    i++; // Increment rank
                }
            });
        }



    } catch (error) {
        alert(error.message);
    }
};
func();

document.getElementsByClassName("return")[0].addEventListener("click",()=>{
  window.location.href="openingpage.html";
});