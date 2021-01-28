'use strict';

const elementSubscribeModal = document.querySelector('#subscribe-modal');
const elementSubscribeModalClose = elementSubscribeModal.querySelector('.modal__close');

window.onload = () => {
   if (!getCookie('subscribeModalShowed')) { // здесь проверка на наличие куки, не на её значение, потому что нам не важно значение, а важно наличие 
      elementSubscribeModal.classList.add('modal_active');
   }
};

elementSubscribeModalClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      elementSubscribeModal.className = 'modal';
      document.cookie = `subscribeModalShowed=true; Expires=${new Date(new Date().setFullYear(new Date().getFullYear() + 100)).toUTCString()};`; // написал 100 лет, надеюсь, хватит :)
}, false);


// функция с learn.javascript.ru
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}