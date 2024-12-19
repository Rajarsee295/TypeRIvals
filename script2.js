const login_button=document.getElementsByClassName("login");
const main1=document.getElementsByClassName("main");
const login_page=document.getElementsByClassName("login_page_container");
const sign_in_page=document.getElementsByClassName("sigin_page_container");

const signup_button_2=document.getElementsByClassName("sign_up_button");
const cancel_button=document.getElementsByClassName("cancel_button");
const return_button=document.getElementsByClassName("return_button");
const signup_button=document.getElementsByClassName("signup");

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
