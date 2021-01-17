'use strict';

const bookControl = Array.from(document.querySelectorAll('.book__control'));
const bookControlElem = [];

for (let i = 0; i < bookControl.length; i++) {
   bookControlElem[i] = Array.from(bookControl[i].children); // все активные элементы

   for (let j = 0; j < bookControlElem[i].length; j++) {
      bookControlElem[i][j].addEventListener("click", function (evt) {
         evt.preventDefault();

//font-size NB! конструкции с правильно написанными дата- значительно облегчают конструкцию
         if (this.closest('.book__control').classList.contains('book__control_font-size')) {
            for (let d = 0; d < bookControlElem[i].length; d++) {
               bookControlElem[i][d].classList.remove('font-size_active');
            }
            switch (this.dataset.size) {
               case 'small':
                  this.closest('.book').classList.remove('book_fs-big');
                  this.closest('.book').classList.add('book_fs-small');
                  this.classList.add('font-size_active');
               break;
               case 'big':
                  this.closest('.book').classList.remove('book_fs-small');
                  this.closest('.book').classList.add('book_fs-big');
                  this.classList.add('font-size_active');
               break;
               default:
                  this.closest('.book').classList.remove('book_fs-big', 'book_fs-small');
                  this.classList.add('font-size_active');
               break
            }
         }

//textColor
         if (this.closest('.book__control').classList.contains('book__control_color')) {
            for (let d = 0; d < bookControlElem[i].length; d++) {
               bookControlElem[i][d].classList.remove('color_active');
            }
            this.closest('.book').classList.remove('book_color-black', 'book_color-whitesmoke', 'book_color-gray');
            this.closest('.book').classList.add('book_color-' + this.dataset.textColor);
            this.classList.add('color_active');
         }

//bgColor
         if (this.closest('.book__control').classList.contains('book__control_background')) {
            for (let d = 0; d < bookControlElem[i].length; d++) {
               bookControlElem[i][d].classList.remove('color_active');
            }
            this.closest('.book').classList.remove('bg_color_black', 'bg_color_white', 'bg_color_gray');
            this.closest('.book').classList.add('bg_color_' + this.dataset.bgColor);
            this.classList.add('color_active');
         }


      }, false);
   }
}


// elementsRotator[r][i].dataset.color