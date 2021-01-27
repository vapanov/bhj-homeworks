
'use strict';

const elementSignIn = document.querySelector('#signin');
const elementWelcome = document.querySelector('#welcome');
const elementUserID = document.querySelector('#user_id');
const elementForm = document.querySelector('#signin__form');
const signoutBtn = document.querySelector('#logout__btn');
let userID = null;

window.onload = () => {
   userID = localStorage.getItem('userID');
   if (userID) {
      successfulAuth(userID);
      return;
   }
   elementSignIn.classList.add('signin_active');
}

elementForm.addEventListener('submit', (evt) => {
   evt.preventDefault();
   let formData = new FormData(elementForm);
   loginAttempt(formData);
}, false);

signoutBtn.addEventListener('click', (evt) => {
   evt.preventDefault();
   localStorage.removeItem('userID');
   elementWelcome.classList.remove('welcome_active');
   elementSignIn.classList.add('signin_active');
}, false);

function loginAttempt(formData) {
   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
   xhr.responseType ='json';
   xhr.send(formData);
   xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4) {
         let response = xhr.response;
         if (response.success) {
            userID = response.user_id;
            elementForm.reset();
            successfulAuth(userID);
            return;
         } else {
            alert('Неверные логин/пароль');
            elementForm.reset();
            return;
         }
      }
   });
}

function successfulAuth(userID) {
   elementSignIn.classList.remove('signin_active')
   elementWelcome.classList.add('welcome_active');
   elementUserID.textContent = userID;
   localStorage.setItem('userID', userID);
}
