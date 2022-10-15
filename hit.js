// //add bg h2 h3
// const hitbg = document.querySelector(".hit-bg");
// const h2 = document.querySelector(".new-hit h2");
// const h3 = document.querySelector("new-hit .hit-bg h3");

// //add even listener for button


// document.querySelector(".new-hit-h3-btn").addEventListener( "onclick", 
//     function (e) {
//         getstartedpressed = false;

//         e.preventDefault(); 
//         document.querySelector(".new-hit-h3-btn").style.opacity = "0";
        
//         document.querySelector(".new-hit-h3-btn").style.transition = "0.5s";
//         getstartedpressed = true;    
//     }
// )


// window.addEventListener("scroll", () => {
//     const scrolled = window.scrollY;

//     console.log(scrolled);
// })



//listen & log y coordinates 
// window.addEventListener("scroll", () => {
//     let scrolled = window.scrollY;

//     //log Y coordinates in console
//     console.log(scrolled);
// })




//GLOBAL-----------------------------------------------------------------

//constants-------
const div1 = document.querySelector(".bg-color-flex .div-1");
const div1Link = document.querySelector(".bg-color-flex .div-1 a");
    // variable for div1
const div2 = document.querySelector(".bg-color-flex .div-2");
const div3 = document.querySelector(".bg-color-flex .div-3");


// //listeners-------
// //div1 listens for click
// div1.addEventListener("click", noScroll);
// //no scroll



//GLOBAL-----------------------------------------------------------------





// DIV1 CLICK-------------------------------------------------------------

//add listener for document click
// window.addEventListener("click", div1click, true);
// //add fn for divclick to start only if the link is pressed
// function ifDiv1Pushed () {
//     if (div1clickstatus == true) {
//         noScroll();
//     }
// }
//functions------
//no scroll fn
// function noScroll () {
//     window.scrollTo(0,810);
// }

// listen for div click
// document.addEventListener("click", div1click); //div 1 listen
// window.addEventListener("scroll", div1click); //scroll listen

div1clickstatus = false;
// div not clicked

document.querySelector(".bg-color-flex .div-1 a").addEventListener("click", div1click);
// listen for link click


//div click function
function div1click (e) {
    e.preventDefault(); 

    // window.scrollTo(0,810);
    // window.scroll(0,findPos(document.getElementById("#how-it-works")));
    // document.querySelector('#new-hit').scrollIntoView({
    //     behavior: 'smooth'
    //   });

    div1.style.opacity = "0.1";
    div1.style.scale = "100%";
    

    div1clickstatus = true;





// DIV2-------------------------------------------------------------

//div 2 activated
div2activated = false;
// div 2 off

// // // listen for div1 click
// div2.addEventListener("click", div1click, true);



// DIV2 Activate
    // function div2activate (e) {
    //     e.preventDefault();

    //         div2.classList.add("div-2-activated");
        
    //     div2activated = true;
    //     }

//if div click is true do this function
if (div1clickstatus == true) {
    div2.style.clipPath = "inset(2.5em 0 0 0)";
    div2.classList.add("div-2-activated");
    
}
div2activated = true;



// DIV 2 Clicked-----------------------------------------------------
div2clickstatus = false;
// div not clicked

// listen for div1 click
document.querySelector(".bg-color-flex .div-2 a").addEventListener("click", 

function (e) {
    e.preventDefault();
    div2.classList.add("div-2-selected");

    div2clickstatus = true;
}
);






// // DIV3-------------------------------------------------------------

//div 3 activated
div3activated = false;
// div 3 off

if (div2clickstatus == true ) {
    div3.classList.add("div-3-activated");
}

div3activated = true;   



    
}









// // DIV 3 Clicked-----------------------------------------------------
// // listen for div click

// document.querySelector(".bg-color-flex .div-3 a").addEventListener("click", div2click, div3click());

// div3clickstatus = false;
// // div not clicked

// function div3click (e) {
//     e.preventDefault();
  
//     div3.classList.add("div-3-selected");

// div3clickstatus = true;

// }


