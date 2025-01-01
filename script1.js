const drop_btn = document.getElementsByClassName("dropbtn");
const addDisplay = document.getElementsByClassName("drop_down_content");

drop_btn[0].addEventListener("click", function () {
   addDisplay[0].classList.add("show");
});

window.addEventListener("click", function (event) {
   if (!(event.target.matches(".dropbtn")) || !(event.target.matches(this.document.getElementsByClassName(".buttons ")))) {
      addDisplay[0].classList.remove("show");
   }
});

const drop_btn_text = document.getElementsByClassName("drop_btn_text");

const arr = [
   document.getElementById("Newbie"),
   document.getElementById("Intermediate"),
   document.getElementById("Expert")
];

let selected_difficulty = "Newbie";

arr.forEach(function (element) {
   element.addEventListener("click", function () {
      drop_btn_text[0].textContent = element.id;
      selected_difficulty = element.id;


   });
});


const fifteen = document.getElementsByClassName("fifteen");
const thirty = document.getElementsByClassName("thirty");
const forty_five = document.getElementsByClassName("forty_five");
const sixty = document.getElementsByClassName("sixty");
let timer = 30;
const time = document.getElementsByClassName("time");

fifteen[0].addEventListener("click", function () {
   fifteen[0].style.color = "yellow";
   thirty[0].style.color = "white";
   forty_five[0].style.color = "white";
   sixty[0].style.color = "white";
   timer = 15;
   time[0].innerHTML = timer;
   console.log(time[0].innerHTML)
});

thirty[0].addEventListener("click", function () {
   thirty[0].style.color = "yellow";
   fifteen[0].style.color = "white";
   forty_five[0].style.color = "white";
   sixty[0].style.color = "white";
   timer = 30;
   time[0].innerHTML = timer;
});

forty_five[0].addEventListener("click", function () {
   forty_five[0].style.color = "yellow";
   thirty[0].style.color = "white";
   fifteen[0].style.color = "white";
   sixty[0].style.color = "white";
   timer = 45;
   time[0].innerHTML = timer;
});

sixty[0].addEventListener("click", function () {
   sixty[0].style.color = "yellow";
   thirty[0].style.color = "white";
   forty_five[0].style.color = "white";
   fifteen[0].style.color = "white";
   timer = 60;
   time[0].innerText = timer;
});


let str = "life is a journey filled with endless possibilities where each day brings new challenges opportunities growth and discoveries that shape our character and inspire our dreams as we move forward embracing every moment with hope courage and resilience in our hearts knowing that every step we take matters and contributes to the tapestry of our lives which is woven with threads of love kindness determination and the will to overcome obstacles while cherishing the connections we build with others who walk beside us sharing laughter tears and memories that become the foundation of a life lived fully with purpose and gratitude";
const typing_area = document.getElementsByClassName("typing_area_main_container");

for (let i = 0; i < str.length; i++) {
   let char = str.charAt(i);
   if (str.charAt(i) == ' ') {
      typing_area[0].innerHTML += `<span class="letters" id="${i}"> &nbsp</span>`;
      continue;
   }
   typing_area[0].innerHTML += `<span class="letters" id="${i}">${char}</span>`;
}

let counter = 0;
let extra_letters = 0;
let position = -42;
let correct_character = 0;
let timer_copy = 0;
cout = 0;
let counting_time = 0;
const words = document.querySelectorAll(".letters");
const cursor = document.getElementsByClassName("cursor");
const restart = document.getElementsByClassName("restart");
var wpm = 0;
var raw = 0;
let wrong_letters=0;

window.addEventListener("keydown", function (event) {

   if (selected_difficulty == 'Newbie') {
      console.log("newbie");

      if (/^[a-zA-Z]$/.test(event.key)) {
         if (event.key != str.charAt(counter)) {

            if (str.charAt(counter) == ' ') {
               const newSpan = document.createElement('span');
               newSpan.textContent = event.key;
               newSpan.style.color = "#cb384c";
               newSpan.style.textDecoration = "underline";
               newSpan.classList.add("letters");
               newSpan.id = `extra${extra_letters}`;
               document.getElementById(`${counter - 1}`).appendChild(newSpan);
               extra_letters++;
               cursor[0].style.top = document.getElementById(`extra${extra_letters - 1}`).getBoundingClientRect().top + 6 + "px";
               
               cursor[0].style.left = document.getElementById(`extra${extra_letters - 1}`).getBoundingClientRect().right + "px";
      
               raw++;
            }
            else {
               document.getElementById(`${counter}`).style.color = "#cb384c";
               document.getElementById(`${counter}`).style.textDecoration = "underline";
               counter++;
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
               raw++;
            }
         }
         else {
            document.getElementById(`${counter}`).style.color = "#f4f0f1";
            counter++;
            if (str.charAt(counter) == ' ') {
               cursor[0].style.top = document.getElementById(`${counter - 1}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter - 1}`).getBoundingClientRect().left + 20 + "px";
               raw++;
            }
            else {
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
               raw++;
            }
            correct_character++;
         }
         if (cout == 0) {
            time_counting();
            cout++;
         }
      }
      if (event.key == ' ') {
         event.preventDefault();
         if (str.charAt(counter) == ' ') {
            counter++;
            cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
            cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            correct_character++;
         }
         else {
            document.getElementById(`${counter}`).style.color = "#cb384c";
            document.getElementById(`${counter}`).style.textDecoration = "underline";
            counter++;
            cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
            cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
         }
         raw++;
         if (cout == 0) {
            time_counting();
            cout++;
         }
      }
      if (event.key === "Backspace") {
         if (str.charAt(counter) == ' ') {
            if (document.getElementById(`${counter - 1}`).contains(document.getElementById(`extra${extra_letters - 1}`))) {
               document.getElementById(`${counter - 1}`).removeChild(document.getElementById(`extra${extra_letters - 1}`));
               extra_letters--;
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            }
            else {
               counter--;
               document.getElementById(`${counter}`).style.color = "grey";
               document.getElementById(`${counter}`).style.textDecoration = "none";
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            }
         }
         else {
            if (counter > 0) {
               counter--;
               document.getElementById(`${counter}`).style.color = "grey";
               document.getElementById(`${counter}`).style.textDecoration = "none";
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            }
         }
         let top_value_2 = parseInt(window.getComputedStyle(cursor[0]).top, 10);
         if (top_value_2 < 417) {
            position += 42;
            words.forEach(word => {
               word.style.top = position + "px";
            });
            cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
            cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";

         }
         raw--;
      }

      let top_value = parseInt(window.getComputedStyle(cursor[0]).top, 10);
      if (top_value > 460) {
         if (position == 0) {
            position -= 42;
         }
         words.forEach(word => {
            word.style.top = position + "px";
         });
         cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
         cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
         position -= 42;
      }

   }
   else if (selected_difficulty == "Intermediate") {
      console.log("Intermediate");
      if (/^[a-zA-Z]$/.test(event.key)) {
         if (event.key != str.charAt(counter)) {

            if (str.charAt(counter) == ' ') {
               const newSpan = document.createElement('span');
               newSpan.textContent = event.key;
               newSpan.style.color = "#cb384c";
               newSpan.style.textDecoration = "underline";
               newSpan.classList.add("letters");
               newSpan.id = `extra${extra_letters}`;
               document.getElementById(`${counter - 1}`).appendChild(newSpan);
               extra_letters++;
               cursor[0].style.top = document.getElementById(`extra${extra_letters - 1}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`extra${extra_letters - 1}`).getBoundingClientRect().right  + "px";
               raw++;
               wrong_letters++;
               
            }
            else {
               document.getElementById(`${counter}`).style.color = "#cb384c";
               document.getElementById(`${counter}`).style.textDecoration = "underline";
               counter++;
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
               raw++;
            }
            wrong_letters++;
         }
         else {
            document.getElementById(`${counter}`).style.color = "#f4f0f1";
            counter++;
            if (str.charAt(counter) == ' ') {
               cursor[0].style.top = document.getElementById(`${counter - 1}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter - 1}`).getBoundingClientRect().left + 20 + "px";
               raw++;
            }
            else {
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
               raw++;
            }
            correct_character++;
         }
         if (cout == 0) {
            time_counting();
            cout++;
         }
      }
      if (event.key == ' ') {
         event.preventDefault();
         if (str.charAt(counter) == ' ') {
            counter++;
            cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
            cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            correct_character++;
            if(wrong_letters){
               wpm_calculator();
            }
         }
         else {
            document.getElementById(`${counter}`).style.color = "#cb384c";
            document.getElementById(`${counter}`).style.textDecoration = "underline";
            counter++;
            wrong_letters++;
            cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
            cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
         }
         raw++;
         if (cout == 0) {
            time_counting();
            cout++;
         }
      }
      if (event.key === "Backspace") {
         if (str.charAt(counter) == ' ') {
            if (document.getElementById(`${counter - 1}`).contains(document.getElementById(`extra${extra_letters - 1}`))) {
               document.getElementById(`${counter - 1}`).removeChild(document.getElementById(`extra${extra_letters - 1}`));
               extra_letters--;
               wrong_letters--;
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            }
            else {
               counter--;
               document.getElementById(`${counter}`).style.color = "grey";
               document.getElementById(`${counter}`).style.textDecoration = "none";
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            }
         }
         else {
            if (counter > 0) {
               counter--;
               if(document.getElementById(`${counter}`).style.color=="#cb384c"){
                  wrong_letters--;
               }
               document.getElementById(`${counter}`).style.color = "grey";
               document.getElementById(`${counter}`).style.textDecoration = "none";
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            }
         }
         let top_value_2 = parseInt(window.getComputedStyle(cursor[0]).top, 10);
         if (top_value_2 < 417) {
            position += 42;
            words.forEach(word => {
               word.style.top = position + "px";
            });
            cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
            cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";

         }
         raw--;
      }

      let top_value = parseInt(window.getComputedStyle(cursor[0]).top, 10);
      if (top_value > 460) {
         if (position == 0) {
            position -= 42;
         }
         words.forEach(word => {
            word.style.top = position + "px";
         });
         cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
         cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
         position -= 42;
      }
   }
   else if (selected_difficulty == "Expert") {
      console.log("Expert");
      if (/^[a-zA-Z]$/.test(event.key)) {
         if (event.key != str.charAt(counter)) {
            wpm_calculator();
         }
         else {
            document.getElementById(`${counter}`).style.color = "#f4f0f1";
            counter++;
            if (str.charAt(counter) == ' ') {
               cursor[0].style.top = document.getElementById(`${counter - 1}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter - 1}`).getBoundingClientRect().left + 20 + "px";
               raw++;
            }
            else {
               cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
               cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
               raw++;
            }
            correct_character++;
         }
         if (cout == 0) {
            time_counting();
            cout++;
         }
      }
      if (event.key == ' ') {
         event.preventDefault();
         if (str.charAt(counter) == ' ') {
            counter++;
            cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
            cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
            correct_character++;
         }
         else {
            wpm_calculator();
         }
         raw++;
         if (cout == 0) {
            time_counting();
            cout++;
         }
      }
      let top_value = parseInt(window.getComputedStyle(cursor[0]).top, 10);
      if (top_value > 460) {
         if (position == 0) {
            position -= 42;
         }
         words.forEach(word => {
            word.style.top = position + "px";
         });
         cursor[0].style.top = document.getElementById(`${counter}`).getBoundingClientRect().top + 6 + "px";
         cursor[0].style.left = document.getElementById(`${counter}`).getBoundingClientRect().left + "px";
         position -= 42;
      }

   }
});

function wpm_calculator() {
   wpm = parseInt(correct_character / (5 * timer_copy / 60));
   localStorage.setItem("wpm", wpm);
   localStorage.setItem("time_woohoo",counting_time);
   localStorage.setItem("raw", (parseInt(raw / (5 * counting_time / 60))));
   window.location.href = "score_page.html";
}

restart[0].addEventListener("click", function () {

   timer = timer_copy;
   time[0].innerText = timer;
   cout = 0;
   cursor[0].style.top = 417 + "px";
   cursor[0].style.left = 215 + "px";
   correct_character = 0;
   counter = 0;
   position = -42;
   words.forEach(word => {
      word.style.color = "grey";
      word.style.textDecoration = "none";
   });
   for (let i = 0; i < extra_letters; i++) {
      document.getElementById(`extra${i}`).remove();
   }
   extra_letters = 0;
});

function time_counting(){
   timer_copy = timer;
   const timer_interval = setInterval(() => {
   timer -= 1;
   counting_time++;
   time[0].innerText = timer;
   if (timer == 0) {
      this.clearInterval(timer_interval);
      wpm_calculator();
   }
   restart[0].addEventListener("click", function () {
      clearInterval(timer_interval);
   });
   }, 1000)
}