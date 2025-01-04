const friends=document.getElementById("friends");
const add_friend=document.getElementById("add_friend");
const friend_requests=document.getElementById("friend_requests");

friends.classList.add("blend");

const friends_container=document.getElementsByClassName("friends_container");
const friend_requests_container=document.getElementsByClassName("friend_requests_container");
const add_friend_container=document.getElementsByClassName("add_friend_container_2");
add_friend_container[0].classList.add("remove");
friend_requests_container[0].classList.add("remove");

friends.addEventListener("click",()=>{
  friends.classList.add("blend");
  add_friend.classList.remove("blend");
  friend_requests.classList.remove("blend");


  friend_requests_container[0].classList.add("remove");
  add_friend_container[0].classList.add("remove");
  friends_container[0].classList.remove("remove");

});
add_friend.addEventListener("click",()=>{
    add_friend.classList.add("blend");
    friends.classList.remove("blend");
    friend_requests.classList.remove("blend");


    friend_requests_container[0].classList.add("remove");
    friends_container[0].classList.add("remove");
  add_friend_container[0].classList.remove("remove");
});
friend_requests.addEventListener("click",()=>{
    friend_requests.classList.add("blend");
    friends.classList.remove("blend");
    add_friend.classList.remove("blend");

    add_friend_container[0].classList.add("remove");
    friends_container[0].classList.add("remove");
    friend_requests_container[0].classList.remove("remove");
});

const ok=document.getElementsByClassName("ok");

const user_uid_2 = localStorage.getItem("user_credentials");
