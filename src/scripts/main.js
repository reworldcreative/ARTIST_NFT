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
  var lazyloadxt = document.createElement("script");
  lazyloadxt.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyloadxt/1.1.0/jquery.lazyloadxt.min.js";

  swiperScript.onload = function () {
    if ($(".card__slider").length > 0) {
      const cardSlider = new Swiper(".card__slider", {
        effect: "cards",
        grabCursor: true,
      });

      // vertical - вертикальна зміна слайдів
      // cardSlider.changeDirection("vertical");
    }

    if ($(".biography__dates").length > 0) {
      const ChooseProductsSwiper = new Swiper(".biography__dates", {
        // slidesPerView: 3,
        // spaceBetween: 30,

        breakpoints: {
          100: {
            slidesPerView: 1.4,
            spaceBetween: 5,
          },
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

    if ($(".NFT-slider").length > 0) {
      const NFTslider = new Swiper(".NFT-slider", {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // centeredSlides: true,
        loop: true,

        breakpoints: {
          100: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
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
        },
      });
    }
    if ($(".forum-body__slider").length > 0) {
      const forumSlider = new Swiper(".forum-body__slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        breakpoints: {
          374: {
            spaceBetween: 14,
          },
          991: {
            spaceBetween: 30,
          },
        },
      });
    }
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
  if ($(window).width() <= 600) {
    if ($(".header-navigation__list").length > 0) {
      $(".burger-menu__header")[0].after($(".header-navigation__list")[0]);
    }

    if ($(".footer__top").length > 0) {
      $(".footer__top .logo")[0].after(
        $(".footer__container .socialsLinks")[0]
      );

      $(".footer__container")[0].after($(".footer__links")[0]);
    }
  }

  if ($(window).width() > 600) {
    if ($(".header-navigation__list").length > 0) {
      $(".header-navigation")[0].append($(".header-navigation__list")[0]);
    }

    if ($(".footer__top").length > 0) {
      $(".footer__top .logo")[0].after($(".footer__links")[0]);

      $(".footer__container")[0].append($(".footer .socialsLinks")[0]);
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

  $("img").each(function () {
    // Перевіряємо, чи має атрибут src значення "@@image"
    if ($(this).attr("src") === "@@image") {
      // Якщо так, то приховуємо його батьківський елемент <picture>
      $(this).closest("picture").hide();
    }
  });
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

  const playButton = document.getElementById("play-btn");
  const videoPlaceholder = document.getElementById("video-placeholder");
  const videoHUD = document.getElementById("video-HUD");

  function loadAndPlayVideo() {
    const youtubeUrl = playButton.dataset.youtubeButton;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "100%");
    iframe.setAttribute("src", youtubeUrl);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");

    videoPlaceholder.replaceWith(iframe);
    playButton.style.display = "none";
    // videoHUD.style.display = "none";

    // Автоматичний запуск відео
    // iframe.addEventListener("load", function () {
    //   iframe.contentWindow.postMessage(
    //     '{"event":"command","func":"playVideo","args":""}',
    //     "*"
    //   );
    // });
  }

  if ($("#play-btn").length > 0) {
    $("#play-btn").click(function (event) {
      console.log("click");
      loadAndPlayVideo();
    });
  }

  $(".tarifItem").click(function () {
    $(".tarifItem").removeClass("active");
    $(".tarifItem .button").removeClass("main");
    $(".tarifItem .button").addClass("active");
    $(this).addClass("active");
    $(this).find(".button").removeClass("active");
    $(this).find(".button").addClass("main");
  });

  // Отримуємо всі кнопки табів та вміст табів
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Додаємо обробник події кліку на кожну кнопку табу
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Вимикаємо активний стан для всіх кнопок та вмісту табів
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Вмикаємо активний стан для поточної кнопки та вмісту табу
      const tabId = button.getAttribute("data-tab");
      const activeTab = document.getElementById(tabId);

      button.classList.add("active");
      activeTab.classList.add("active");

      $(".tarifItem").removeClass("active");
      $(".tarifItem .button").removeClass("main");
      $(".tarifItem .button").addClass("active");
      $(activeTab).find(".tarifItem").addClass("active");
      $(activeTab).find(".tarifItem").find(".button").removeClass("active");
      $(activeTab).find(".tarifItem").find(".button").addClass("main");
    });
  });

  // Функція для зміни активного стану сторінки
  function setActivePage(pageNumber) {
    $(".Nfts-List__pagination_page").removeClass("active");
    $(`#page${pageNumber}`).addClass("active");
  }

  // Обробник кліку по сторінці
  $(".Nfts-List__pagination_page").on("click", function (event) {
    event.preventDefault();
    const pageNumber = $(this).attr("id").replace("page", "");
    setActivePage(pageNumber);
  });

  // Обробник кліку по стрілці "назад"
  $("#prevPage").on("click", function (event) {
    event.preventDefault();
    const currentPage = parseInt(
      $(".Nfts-List__pagination_page.active").attr("id").replace("page", "")
    );
    if (currentPage > 1) {
      setActivePage(currentPage - 1);
    }
  });

  // Обробник кліку по стрілці "вперед"
  $("#nextPage").on("click", function (event) {
    event.preventDefault();
    const currentPage = parseInt(
      $(".Nfts-List__pagination_page.active").attr("id").replace("page", "")
    );
    const totalPages = parseInt($(".Nfts-List__pagination_page").length);
    if (currentPage < totalPages) {
      setActivePage(currentPage + 1);
    }
  });

  const mobileBurger = document.querySelector(
    ".admin .header-sidebar__mobile-burger"
  );
  const userMenuList = document.querySelector(".user-menu__list");
  mobileBurger.addEventListener("click", function () {
    userMenuList.classList.toggle("_active");
  });
});

const listColors = document.querySelectorAll(".form__item-color");

if (listColors) {
  for (let color of listColors) {
    color.addEventListener("click", (e) => {
      let currentColor = e.target.closest(".form__item-color");

      for (let item of listColors) {
        removeClass(item, "_active");
      }

      addClass(currentColor, "_active");
    });
  }
}

//payment form

const allTabs = document.querySelectorAll(".tabs");

if (allTabs) {
  for (let tabs of allTabs) {
    const tabBtns = Array.from(tabs.querySelectorAll(".tab"));
    const tabContents = Array.from(tabs.querySelectorAll(".tab-content"));
    const tabIndicator = tabs.querySelector(".tab-indicator");

    let amountTabs = tabBtns.length;

    for (let btn of tabBtns) {
      btn.addEventListener("click", (e) => {
        let currentBtn = e.target.closest(".tab");
        let tabId = currentBtn.getAttribute("data-tab");
        let currentContent = document.querySelector(tabId);

        for (let btn of tabBtns) {
          removeClass(btn, "_active");
        }

        addClass(currentBtn, "_active");

        if (currentContent) {
          for (let content of tabContents) {
            removeClass(content, "_active");
          }

          addClass(currentContent, "_active");
          changeIndicator(currentBtn);
        }
        e.preventDefault();
      });
    }

    function changeIndicator(btn) {
      let indexBtn = tabBtns.indexOf(btn);
      tabIndicator.style.left = `calc(${indexBtn} * 100% / ${amountTabs})`;
    }
  }
}

// wallet copy
const copyWallet = document.querySelector(".form__copy-icon");

if (copyWallet) {
  let wallet = document.querySelector(".cripto-wallet");

  copyWallet.addEventListener("click", (e) => {
    navigator.clipboard.writeText(wallet.innerHTML);

    if (navigator.clipboard.writeText(wallet.innerHTML)) {
      addClass(copyWallet.parentElement, "_active");

      setTimeout(() => {
        removeClass(copyWallet.parentElement, "_active");
      }, 1000);
    } else {
      console.log("Not copied");
    }
  });
}

//active premium content
const unlockBtn = document.querySelector(".unlock-btn");

if (unlockBtn) {
  unlockBtn.addEventListener("click", (e) => {
    let premiumContent = document.querySelector(".product-content__unlocked");

    addClass(premiumContent, "_active");

    e.preventDefault();
  });
}

//Admin Header Menu

const headerMenuBtn = document.querySelector(".header-btn");
const headerMenu = document.querySelector(".user-menu__list");

if (headerMenuBtn) {
  headerMenuBtn.addEventListener("click", (e) => {
    toggleClass(headerMenu, "_active");
    toggleClass(document.body, "_lock");
  });
}

//Messanger

const aPanel = document.querySelector(".apanel");

if (aPanel) {
  const allLinks = Array.from(aPanel.querySelectorAll(".user-menu__link"));
  const allContent = Array.from(aPanel.querySelectorAll(".content-user__body"));

  for (let link of allLinks) {
    link.addEventListener("click", (e) => {
      let currentLink = e.target.closest(".user-menu__link");
      let linkId = currentLink.getAttribute("data-link");
      let currentContent = aPanel.querySelector(linkId);

      for (let item of allLinks) {
        removeClass(item, "_active");
      }

      for (let item of allContent) {
        removeClass(item, "_active");
      }

      addClass(currentLink, "_active");
      addClass(currentContent, "_active");
      removeClass(headerMenu, "_active");
      removeClass(document.body, "_lock");

      e.preventDefault();
    });
  }
}

//Show Dialog
const itemDialog = document.querySelector(".item-dialog");
const dialog = document.querySelector(".dialog");

if (itemDialog) {
  let outLink = dialog.querySelector(".dialog__out-link");

  console.log(outLink);

  itemDialog.addEventListener("click", (e) => {
    addClass(dialog, "_active");
  });

  outLink.addEventListener("click", (e) => {
    removeClass(dialog, "_active");
  });
}
