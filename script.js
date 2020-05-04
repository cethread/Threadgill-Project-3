const getStartedBtn = document.querySelector(".sign-in .btn-slide-down");
const signInBtn = document.querySelector(".btn-slide-left");
const signInSection = document.querySelector(".sign-in")
const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".hamburger");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const forgotPassword = document.querySelector(".forgot-password");



function signIn () {
    signInSection.classList.toggle("sign-in-trigger");
    logo.classList.toggle("sign-in-trigger");
    hamburger.classList.toggle("menu-btn-trigger");
    password.classList.toggle("menu-btn-trigger");
    signInBtn.classList.toggle("sign-in-trigger");
    forgotPassword.classList.toggle("sign-in-trigger");
    
}

getStartedBtn.addEventListener("click", signIn, false);
console.log("working")