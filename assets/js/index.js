

$(document).ready(function () {
  
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
