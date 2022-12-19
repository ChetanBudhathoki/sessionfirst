// variables

let isDrawerOpen = false;
let position = -80;

// selectors

const menu = document.querySelector(".menubar");
const cancelmenu=document.querySelector(".menucancel");
const dropDownContainer = document.querySelector(".dropdown_container");

// eventlisteners

menu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hellow there");

  isDrawerOpen = !isDrawerOpen;
  let test = setInterval(() => {
    slideDrawer();
    dropDownContainer.style.right = position + "vw";
    console.log("POSITON is :", position);

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
