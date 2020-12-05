'use strict';

let lastActiveDropdown;

const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
for (let i = 0; i < dropdownValue.length; i++) {
   dropdownValue[i].addEventListener("click", function (evt) {
      let activeDropdown = this.closest('.dropdown').querySelector('.dropdown__list');
      if (activeDropdown) {
         if (activeDropdown != lastActiveDropdown && lastActiveDropdown) {
            lastActiveDropdown.classList.remove('dropdown__list_active');
         }
      }
      activeDropdown.classList.toggle('dropdown__list_active');
      lastActiveDropdown = activeDropdown;
      evt.preventDefault();
   }, false);
}

const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));
for (let i = 0; i < dropdownLink.length; i++) {
   dropdownLink[i].addEventListener("click", function (evt) {
      this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
      this.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
      evt.preventDefault();
   }, false);
}
