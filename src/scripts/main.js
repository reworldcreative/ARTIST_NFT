import * as functions from "./modules/functions.js";

functions.isWebp();

window.addEventListener("DOMContentLoaded", function () {
  loadCSS("https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css");
  loadCSS(
    "https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
  );

  var swiperScript = document.createElement("script");
  swiperScript.src =
    "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";

  var swiperScript = document.createElement("script");
  swiperScript.src =
    "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
  var lazyloadxt = document.createElement("script");
  lazyloadxt.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyloadxt/1.1.0/jquery.lazyloadxt.min.js";

  swiperScript.onload = function () {
    if ($(".card__slider").length > 0) {
      const cardSlider = new Swiper(".card__slider", {
        effect: "cards",
        grabCursor: true,
      });
    }

    if ($(".biography__dates").length > 0) {
      const ChooseProductsSwiper = new Swiper(".biography__dates", {
        // slidesPerView: 3,
        // spaceBetween: 30,

        breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
        },
      });
    }
<<<<<<< Updated upstream
=======

    if ($(".NFT-slider").length > 0) {
      const NFTslider = new Swiper(".NFT-slider", {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // centeredSlides: true,
        loop: true,

        breakpoints: {
          300: {
            slidesPerView: 1.27,
            spaceBetween: 16,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1000: {
            slidesPerView: 3.3,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1300: {
            slidesPerView: 3.7,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1400: {
            slidesPerView: 3.87,
            spaceBetween: 30,
            centeredSlides: true,
          },

          1500: {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
          },
        },
      });
    }
>>>>>>> Stashed changes
  };

  document.body.appendChild(swiperScript);
  document.body.appendChild(lazyloadxt);
});

function loadCSS(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

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

  if ($(window).width() < 700) {
    if ($(".biography").length > 0) {
      $(".biography .section-row")[0].prepend(
        $(".biography .biography__top")[0]
      );
    }
  }

  if ($(window).width() > 700) {
    if ($(".biography").length > 0) {
      $(".biography .biography__container")[0].prepend(
        $(".biography .biography__top")[0]
      );
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
