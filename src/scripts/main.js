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
