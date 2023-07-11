import * as functions from "./modules/functions.js";

functions.isWebp();

window.addEventListener("DOMContentLoaded", function () {
  loadCSS("https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css");
  loadCSS(
    "https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
  );

  var swiperScript = document.createElement("script");
  swiperScript.src =
    "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";
  var lazyloadxt = document.createElement("script");
  lazyloadxt.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyloadxt/1.1.0/jquery.lazyloadxt.min.js";

  swiperScript.onload = function () {
    document.body.appendChild(swiperScript);
    document.body.appendChild(lazyloadxt);
  };
});

function checkSize() {
  if ($(window).width() < 600) {
    if ($(".header-navigation__list").length > 0) {
      $(".burger-menu")[0].append($(".header-navigation__list")[0]);
    }
  }

  if ($(window).width() > 600) {
    if ($(".header-navigation__list").length > 0) {
      $(".header-navigation")[0].append($(".header-navigation__list")[0]);
    }
  }
}

checkSize();
$(window).resize(function () {
  checkSize();
});

$(document).ready(function () {
  var currentUrl = window.location.href;
  var menuItems = document.querySelectorAll(".header-navigation__item");
  menuItems.forEach(function (item) {
    var link = item.querySelector(".header-navigation__link");

    if (link.href === currentUrl) {
      // item.classList.add("active");
    }
  });

  function stopScroll() {
    if ($(".burger-menu").hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  }
  if ($(".burger-menu .close-button").length > 0) {
    $(".burger-menu .close-button").click(function (event) {
      $(".burger-menu").toggleClass("active");
      stopScroll();
    });
  }

  if ($(".burger-button").length > 0) {
    $(".burger-button").click(function (event) {
      $(".burger-menu").toggleClass("active");
      stopScroll();
    });
  }
});
