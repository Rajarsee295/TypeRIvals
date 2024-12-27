const score=document.getElementsByClassName("score");
score[0].innerHTML=localStorage.getItem("wpm");

const time_taken=document.getElementsByClassName("time_taken");
time_taken[0].innerHTML=localStorage.getItem("time_woohoo");
console.log(localStorage.getItem("time_woohoo"))

const raw1=document.getElementsByClassName("raw_");
raw1[0].innerHTML=localStorage.getItem("raw");

const play_again=document.getElementsByClassName("play_again");
play_again[0].addEventListener("click",function(){
   window.location.href="typingpage.html";
});

const sign_out=document.getElementsByClassName("sign_out");
sign_out[0].addEventListener("click",function(){
   window.location.href="index.html";
});