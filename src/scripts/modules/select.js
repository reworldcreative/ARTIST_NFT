import { toggleClass, removeClass } from './functions.js';

const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');

if (selectHeader) {
  for (let item of selectHeader) {
    item.addEventListener('click', selectToggle);
  }
}

if (selectItem) {
  for (let item of selectItem) {
    item.addEventListener('click', selectChoose);
  }
}

function selectToggle(e) {
  toggleClass(this.parentElement, '_active');
}

function selectChoose(e) {
  let text = this.innerText;
  let select = this.closest('.select');
  let currentText = select.querySelector('.select__current');

  currentText.innerText = text;
  removeClass(select, '_active');
}
