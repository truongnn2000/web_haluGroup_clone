let scrollTop = document.querySelector(".back-to-top");
let dropdownLv1 = document.querySelectorAll(".item-menu-lv1 > i");
let dropdownLv2 = document.querySelectorAll(".item-menu-lv2 > i");
let menuLv2 = document.querySelectorAll(".menu-lv2");
let menuLv3 = document.querySelectorAll(".menu-lv3");

for (let i = 0; i < dropdownLv2.length; i++) {
  menuLv3[i].style.display = "none";
  dropdownLv2[i].onclick = function () {
    if (
      (menuLv3[i].style.display == "none") &
      dropdownLv2[i].classList.contains("fa-angle-down")
    ) {
      menuLv3[i].style.display = "block";
      dropdownLv2[i].classList.add("fa-angle-up");
      dropdownLv2[i].classList.remove("fa-angle-down");
    } else {
      menuLv3[i].style.display = "none";
      dropdownLv2[i].classList.add("fa-angle-down");
      dropdownLv2[i].classList.remove("fa-angle-up");
    }
  };
}

for (let i = 0; i < dropdownLv1.length; i++) {
  menuLv2[i].style.display = "none";
  dropdownLv1[i].onclick = function () {
    if (
      (menuLv2[i].style.display == "none") &
      dropdownLv1[i].classList.contains("fa-angle-down")
    ) {
      menuLv2[i].style.display = "block";
      dropdownLv1[i].classList.add("fa-angle-up");
      dropdownLv1[i].classList.remove("fa-angle-down");
    } else {
      menuLv2[i].style.display = "none";
      dropdownLv1[i].classList.add("fa-angle-down");
      dropdownLv1[i].classList.remove("fa-angle-up");
    }
  };
}

scrollTop.style.display = "none";

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

scrollTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("scroll");
});
