'use strict';

//get the length collection of modals
const elementsModalCount = document.getElementsByClassName('modal').length;

function modalShow(activeModal) {
   // hide all modal first
   for (let i = 0; i < elementsModalCount; i++) {
      document.getElementsByClassName('modal')[i].className = 'modal';
   }
   //show asked modal
   document.getElementById(activeModal).className = "modal modal_active";
}


// В момент запуска скрипта, покажите окно #modal_main
window.onload = () => modalShow('modal_main');


// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
const elementsModalCloseCount = document.getElementsByClassName('modal__close').length;

for (let i = 0, element; i < elementsModalCloseCount; i++) {
   element = document.getElementsByClassName('modal__close')[i];
   element.onclick = function () {
      this.closest('.modal_active').className = 'modal';
   };
}


// По нажатию на элемент с классом show-success покажите окно #modal_success
const elementsModalSuccessCount = document.getElementsByClassName('show-success').length;

for (let i = 0, element; i < elementsModalSuccessCount; i++) {
   element = document.getElementsByClassName('show-success')[i];
   element.onclick = function () {
      // close active modal
      this.closest('.modal_active').className = 'modal';
      // show success modal
      document.getElementById('modal_success').className = "modal modal_active";
   };
}