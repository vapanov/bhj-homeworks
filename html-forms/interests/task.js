'use strict';

// переменные
const interestsMain = document.querySelector('.interests_main');

// события
interestsMain.addEventListener('click', (evt) => {
   let currentElement = evt.target;
   const childElements = Array.from(evt.target.closest('li').querySelectorAll('label input'));
   childElements.forEach((element) => element.checked = childElements[0].checked)
});

// в базовом условии нет необходимости устанавливать indeterminate. сегодня не до углубдления, завершаем так.