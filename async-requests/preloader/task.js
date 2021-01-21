'use strict';

const imgLoader = document.querySelector('img.loader');
const divItems = document.querySelector('div#items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.addEventListener('readystatechange', function() {
   if (xhr.readyState === 4) {
      const currencyResponce = JSON.parse(xhr.response);
      Object.values(currencyResponce.response.Valute).forEach((element) => addCurrencyTemplate(element));
      imgLoader.classList.remove('loader_active');
   };
});

function addCurrencyTemplate (currency) {
   divItems.insertAdjacentHTML('beforeend',
      `<div class="item">
         <div class="item__code">${currency.CharCode}</div>
         <div class="item__value">${currency.Value}</div>
         <div class="item__currency">руб.</div>
      </div>`);
}