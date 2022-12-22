// $(document).ready(function(){

// })
// // variables

// let isDrawerOpen = false;
// let position = -80;

// // selectors

// const menu = document.querySelector(".menubar");
// // const dropDownContainer = document.querySelector(".dropdown_container");

// const dropDownContainer = document.querySelector(".navbar_middle");

// const body = document.querySelector("body");
// var navbar = document.querySelector(".navbar");
// var sticky = navbar.offsetHeight;
// var herocontainer = document.querySelector(".hero_container");

// const downangle = document.getElementById("down_angle");
// const tohomearrow=document.querySelector(".to_home_arrow");

// //html element creation
// const menuBtn = document.createElement("img");
// menuBtn.classList.add("menu_icon");
// menuBtn.src = "./assets/images/menu.svg";
// menu.appendChild(menuBtn);

// // eventlisteners
// downangle.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.scrollBy(0,1000);
// });
// tohomearrow.addEventListener("click", (e) => {
//   // e.preventDefault();
//   console.log('HELLOW upangle');
//   // window.scrollBy(0,10);
// });
// menu.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   console.log(e.target);
//   console.log("hellow there");
//   isDrawerOpen
//     ? (menuBtn.src = "./assets/images/menu.svg")
//     : (menuBtn.src = "./assets/images/cancelmenu.svg");
//   isDrawerOpen
//     ? (body.style.overflow = "unset")
//     : (body.style.overflow = "hidden");
//   isDrawerOpen = !isDrawerOpen;
//   let test = setInterval(() => {
//     slideDrawer();
//     dropDownContainer.style.top = position + "%";
//     // console.log("POSITON is :", position);

//     if (position >= 15 || position <= -85) {
//       clearInterval(test);
//       console.log("cleard");
//       isDrawerOpen ? (position = 0) : (position = -80);
//     }
//   }, 1);
// });

// // functions

// const slideDrawer = () => {
//   console.log(isDrawerOpen);
//   if (isDrawerOpen) {
//     position += 1;
//   } else {
//     position -= 1;
//   }
// };

// window.onscroll = function () {

//   myFunction();
// };

// function myFunction() {
//   console.log(window.pageYOffset);
//   if(window.pageYOffset>=1){
//     downangle.style.display="none";
//     tohomearrow.style.display="flex";
//   }
//   else{
//     downangle.style.display="unset";
//     tohomearrow.style.display="none";
//   }

//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//     herocontainer.classList.add("hero_container_margin_top");
//   } else {
//     navbar.classList.remove("sticky");
//     herocontainer.classList.remove("hero_container_margin_top");
//   }
// }

$(document).ready(function () {
  console.log($);
  // variables

  let isDrawerOpen = false;
  let position = -80;

  // selectors

  const menu = document.querySelector(".menubar");
  var navbar = document.querySelector(".navbar");
  var sticky = navbar.offsetHeight;

  const tohomearrow = document.querySelector(".to_home_arrow");

  //html element creation
  const menuBtn = document.createElement("img");
  menuBtn.classList.add("menu_icon");
  menuBtn.src = "./assets/images/menu.svg";
  menu.appendChild(menuBtn);

  // eventlisteners
  // $("#down_angle").on("click", function (e) {
  //   e.preventDefault();
  //   window.scrollBy(0, 1000);
  // });

  $(".menubar").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    isDrawerOpen
      ? (menuBtn.src = "./assets/images/menu.svg")
      : (menuBtn.src = "./assets/images/cancelmenu.svg");
    isDrawerOpen
      ? $("body").css("overflow", "unset")
      : $("body").css("overflow", "hidden");

    
     

    isDrawerOpen = !isDrawerOpen;
    if(isDrawerOpen===true){
      $(".navbar").addClass("sticky")}
    let test = setInterval(() => {
      slideDrawer();
      $(".navbar_middle").css("top", position + "%");

      if (position >= 15 || position <= -85) {
        clearInterval(test);
        console.log("cleard");
        isDrawerOpen ? (position = 0) : (position = -80);
      }
    }, 1);
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

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 1) {
      $("#down_angle").css("display", "none");
      $(".to_home_arrow").css("display", "flex");
    } else {
      $("#down_angle").css("display", "unset");
      $(".to_home_arrow").css("display", "none");
    }

    if (window.pageYOffset >= sticky) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  }
});
