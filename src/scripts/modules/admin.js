// Получаем все ссылки меню и контент вкладок
const menuLinks = document.querySelectorAll('.user-menu__link');
const tabContents = document.querySelectorAll('.content-user__body');

// Обрабатываем клики на ссылках меню
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // Удаляем класс _active у текущей активной ссылки
    document.querySelector('.user-menu__link._active').classList.remove('_active');

    // Добавляем класс _active к выбранной ссылке
    link.classList.add('_active');

    // Получаем data-link атрибут выбранной ссылки
    const targetTab = link.getAttribute('data-link');

    // Скрываем все вкладки
    tabContents.forEach(tab => tab.classList.remove('_active'));

    // Показываем только выбранную вкладку
    document.querySelector(targetTab).classList.add('_active');
  });
});
// Получаем все элементы чат-диалогов
const chatDialogs = document.querySelectorAll('.chat-list__dialog');

// Обрабатываем клики на элементах чат-диалогов
chatDialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    // Удаляем класс _active у текущего активного чата
    document.querySelector('.chat-list__dialog._active').classList.remove('_active');

    // Добавляем класс _active к выбранному чат-диалогу
    dialog.classList.add('_active');
  });
});
