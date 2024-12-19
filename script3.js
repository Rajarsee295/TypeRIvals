const  play_button=document.getElementsByClassName("play");
const sign_out_button=document.getElementsByClassName("sign_out");
const leaderboard_button=document.getElementsByClassName("leaderboard");

play_button[0].addEventListener("click",function(){
  window.location.href="typingpage.html";
});

sign_out_button[0].addEventListener("click",function(){
    window.location.href="index.html";
  });