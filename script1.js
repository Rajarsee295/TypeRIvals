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


const fifteen=document.getElementsByClassName("fifteen");
const thirty=document.getElementsByClassName("thirty");
const forty_five=document.getElementsByClassName("forty_five");
const sixty=document.getElementsByClassName("sixty");
let timer=0;
const time=document.getElementsByClassName("time");

fifteen[0].addEventListener("click",function(){
   fifteen[0].style.color="yellow";
   thirty[0].style.color="white";
   forty_five[0].style.color="white";
   sixty[0].style.color="white";
   timer=15;
   time[0].innerHTML=timer;
   console.log(time[0].innerHTML)
});

thirty[0].addEventListener("click",function(){
   thirty[0].style.color="yellow";
   fifteen[0].style.color="white";
   forty_five[0].style.color="white";
   sixty[0].style.color="white";
   timer=30;
   time[0].innerHTML=timer;
});

forty_five[0].addEventListener("click",function(){
   forty_five[0].style.color="yellow";
   thirty[0].style.color="white";
   fifteen[0].style.color="white";
   sixty[0].style.color="white";
   timer=45;
   time[0].innerHTML=timer;
});

sixty[0].addEventListener("click",function(){
   sixty[0].style.color="yellow";
   thirty[0].style.color="white";
   forty_five[0].style.color="white";
   fifteen[0].style.color="white";
   timer=60;
   time[0].innerText=timer;
});


let str="life is a journey filled with endless possibilities where each day brings new challenges opportunities growth and discoveries that shape our character and inspire our dreams as we move forward embracing every moment with hope courage and resilience in our hearts knowing that every step we take matters and contributes to the tapestry of our lives which is woven with threads of love kindness determination and the will to overcome obstacles while cherishing the connections we build with others who walk beside us sharing laughter tears and memories that become the foundation of a life lived fully with purpose and gratitude";
const typing_area=document.getElementsByClassName("typing_area_main_container");

for(let i=0;i<str.length;i++){
   let char=str.charAt(i);
   if(str.charAt(i-1)==' '){
      typing_area[0].innerHTML+=`<span class="letters" id="${i}"> &nbsp${char}</span>`;
      continue;
   }
   typing_area[0].innerHTML+=`<span class="letters" id="${i}">${char}</span>`;
}
let counter=0;
window.addEventListener("keydown",function(event){

   if(/^[a-zA-Z]$/.test(event.key)){
      console.log("is letters");
      if(event.key !=str.charAt(counter)){
         document.getElementById(`${counter}`).style.color="#cb384c";
         if(str.charAt(counter)==' '){
            document.getElementById(`${counter}`).style.color="#cb384c";
            document.getElementById(`${counter}`).innerHTML+=event.key;
            counter--;
         }
         
         counter++;
      }
      else{
         document.getElementById(`${counter}`).style.color="#f4f0f1";
         counter++;
      }
   }
   if(event.key==' '){
      if(str.charAt(counter)==' '){
         counter++;
      }
      else{
         document.getElementById(`${counter}`).style.color="#cb384c";
         counter++;
      }
   }
   if (event.key === "Backspace") {
      if(str.charAt(counter)==' ' && document.getElementById(`${counter}`).innerHTML != ''){
         let extra_letters=document.getElementById(`${counter}`).innerHTML;
         document.getElementById(`${counter}`).innerHTML=extra_letters.slice(0,extra_letters.length-1);
      }
      else{
         if(counter>0){
            counter--;
            document.getElementById(`${counter}`).style.color="grey";
         }
         
      }
   }
});

function time_function(){
  const interval= setInterval(function(){
   if(timer<=0){
      clearInterval(interval);
   }
   timer-=1;
   time[0].innerText=timer;
  },1000);
}

window.addEventListener("keydown",function(ev){
   if(/^[a-zA-Z]$/.test(ev.key)){
      time_function();
   }
}, {once:true});
