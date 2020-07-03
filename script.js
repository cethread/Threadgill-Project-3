// const getStartedBtn = document.querySelector(".sign-in .btn-slide-down");
// const signInBtn = document.querySelector(".btn-slide-left");
// const signInSection = document.querySelector(".sign-in");
// const icon = document.querySelector(".icon");
// const logoImage = document.querySelector(".logo a");
// const hamburger = document.querySelector(".hamburger");
// const username = document.querySelector(".username");
// const password = document.querySelector(".password");
// const forgotPassword = document.querySelector(".forgot-password");

// function signIn() {
//   signInSection.classList.toggle("sign-in-trigger");
//   icon.classList.toggle("sign-in-trigger");
//   hamburger.classList.toggle("menu-btn-trigger");
//   password.classList.toggle("menu-btn-trigger");
//   signInBtn.classList.toggle("sign-in-trigger");
//   forgotPassword.classList.toggle("sign-in-trigger");
// }

// function lowOpacity () {
//     icon.style.opacity = "0.5";
// }
// getStartedBtn.addEventListener("click", signIn, false);
// logoImage.addEventListener("mouseover" , lowOpacity, false)
// console.log("working");

// LOGIN

document
  .querySelector(".login-btn")
  .addEventListener("click", openLogin, false);

loginStatus = false;

function openLogin(e) {
  e.preventDefault();
  let loginWrap = document.querySelector(".login-wrap");
  loginWrap.classList.add("login-wrap-slide");
  document.querySelector("body").classList.add("body-blackout");
  loginStatus = true;

  if (loginStatus == true) {
    document.querySelector(".fas").addEventListener("click", function (e) {
      e.preventDefault();
      loginWrap.classList.remove("login-wrap-slide");
      document.querySelector("body").classList.remove("body-blackout");
    });
    loginStatus = false;
  }
}

// Loop through the links and add  the red class to them
// For Loop
const paragraphs = document.querySelectorAll("#about a");

var i;

for (var i = 0; i < paragraphs.length; i++) {
  if (!paragraphs[i].classList == "green") {
    console.log(paragraphs[i] + " isnt a green link!");
    i++;
  } else if (paragraphs[i].classList == "green") {
    console.log(paragraphs[i] + "Is a GREEN link!");
    i++;
  }
}

// While Loop
// var i = 0;
// while (paragraphs[i].classList != "green") {
//   paragraphs[i].classList.add("red");
//   i++;
//   break;
// }

// const navbarLink = document.querySelector(".navbar-link");

// function addHoverEffect() {
//   let mouseoverStatus = false;

//   if (mouseoverStatus == false) {
//     navbarLink.classList.add("nav-btn");
//     mouseoverStatus = true;
//   } else if (mouseoverStatus == true) {
//     navbarLink.classList.remove("nav-btn");
//     mouseoverStatus = false;
//   }
// }

// navbarLink.addEventListener("mouseover", addHoverEffect);

// console.log("working");

// Body Load

window.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("header").classList.add("body-load");
    console.log("working");
  },
  false
);
