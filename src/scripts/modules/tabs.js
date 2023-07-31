import { addClass } from '../modules/functions.js';
import { removeClass } from '../modules/functions.js';

const tabBody = document.querySelector('.tabs');

if (tabBody) {
  const tabButtons = Array.from(tabBody.querySelectorAll('.tabs__btn'));
  const tabSlides = Array.from(tabBody.querySelectorAll('.tabs__slide'));
  const tabIndicator = tabBody.querySelector('.tabs__indicator');
  const amountVar = document.querySelector(':root');

  function tabFunc() {
    let numTabs = tabButtons.length;

    amountVar.style.setProperty('--amount-tab', numTabs);

    let firstElement = document.querySelector('.tabs__buttons').firstElementChild;

    for (let elem of tabButtons) {
      elem.addEventListener('click', e => {
        let currentBtn = e.target.closest('.tabs__btn');
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        let activeTab = currentBtn.classList.contains('_active');

        if (!activeTab) {
          for (let item of tabButtons) {
            removeClass(item, '_active');
          }

          for (let item of tabSlides) {
            removeClass(item, '_active');
          }
        }

        addClass(currentBtn, '_active');
        addClass(currentTab, '_active');

        changeIndicator(currentBtn);
        e.preventDefault();
      });

      firstElement.click();
    }

    function changeIndicator(btn) {
      let indexBtn = tabButtons.indexOf(btn);
      tabIndicator.style.left = `calc(${indexBtn} * 100% / ${numTabs})`;
    }
  }

  tabFunc();
}
