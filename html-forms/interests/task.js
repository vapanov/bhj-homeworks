'use strict';

// переменные
const interestsMain = document.querySelector('.interests_main');

// события
interestsMain.addEventListener('click', (evt) => {
   let currentElement = evt.target;
   const childElements = Array.from(evt.target.closest('li').querySelectorAll('label input'));
   for (let i = 1; i < childElements.length; i++) {
      childElements[i].checked = childElements[0].checked;
   }

});

// в базовом условии нет необходимости устанавливать indeterminate. сегодня не до углубдления, завершаем так.