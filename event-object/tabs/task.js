'use strict';

let activeTabName = document.querySelector('.tab_active');
let activeTabContent= document.querySelector('.tab__content_active');

const tabNames = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
for (let i = 0; i < tabNames.length; i++) {
   tabNames[i].addEventListener("click", function (evt) {
      evt.preventDefault();

      if (activeTabName && activeTabContent) {
         activeTabName.classList.remove('tab_active');
         activeTabContent.classList.remove('tab__content_active');
      }
      tabNames[i].classList.add('tab_active');
      tabContent[i].classList.add('tab__content_active');
      activeTabName = tabNames[i];
      activeTabContent = tabContent[i];

   }, false);
}