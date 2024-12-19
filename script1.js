const drop_btn=document.getElementsByClassName("dropbtn");
const addDisplay=document.getElementsByClassName("drop_down_content");

drop_btn[0].addEventListener("click",function(){
   addDisplay[0].classList.add("show");
});

window.addEventListener("click",function(event){
   if(!(event.target.matches(".dropbtn")) || !(event.target.matches(this.document.getElementsByClassName(".buttons "))) ){
      addDisplay[0].classList.remove("show");
   }
});

const drop_btn_text=document.getElementsByClassName("drop_btn_text");

const arr= [
   document.getElementById("Newbie"),
   document.getElementById("Intermediate"),
   document.getElementById("Expert")
];

let selected_difficulty="";

arr.forEach(function(element){
   element.addEventListener("click",function(){     
     drop_btn_text[0].textContent=element.id;
     selected_difficulty=element.id;
     console.log(typeof(selected_difficulty));   
   });
});
