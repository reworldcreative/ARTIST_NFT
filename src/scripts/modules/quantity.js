// Форма колличества товаров
const quantityBody = document.querySelectorAll('.quantity');

if (quantityBody) {
  for (let elem of quantityBody) {
    let input = elem.querySelector('.quantity__input');

    elem.addEventListener('click', e => {
      let onClickMinus = e.target.closest('._minus');
      let onClickPlus = e.target.closest('._plus');

      if (onClickMinus) {
        input.value--;
      } else if (onClickPlus) {
        input.value++;
      }

      if (input.value <= 1) {
        input.value = 1;
      }
    });
  }
}
