// variables

let isDrawerOpen = false;
let position = -80;

// selectors

const menu = document.querySelector(".menubar");
const dropDownContainer = document.querySelector(".dropdown_container");


//html element creation 
const menuBtn=document.createElement("img");
menuBtn.classList.add('menu_icon');
menuBtn.src="./assets/images/menu.svg";
menu.appendChild(menuBtn);


// eventlisteners

menu.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log(e.target);
  console.log("hellow there");
  isDrawerOpen?menuBtn.src="./assets/images/menu.svg":menuBtn.src="./assets/images/cancelmenu.svg";
  isDrawerOpen = !isDrawerOpen;
  let test = setInterval(() => {
    slideDrawer();
    dropDownContainer.style.right = position + "vw";
    // console.log("POSITON is :", position);

    if (position >= 0 || position <= -80) {
      clearInterval(test);
      console.log("cleard");
      isDrawerOpen ? position = 0 : position = -80;
    }
  }, 5);
});

// functions

const slideDrawer = () => {
  console.log(isDrawerOpen);
  if (isDrawerOpen) {
    position += 1;
  } else {
    position -= 1;
  }
};



window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetHeight;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
