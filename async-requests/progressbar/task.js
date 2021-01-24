'use strict';

const progressElement = document.querySelector('#progress');
const formElement = document.querySelector('#form');

formElement.addEventListener('submit', (evt) => {
   evt.preventDefault();
   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
   xhr.setRequestHeader('Content-Type', 'multipart/form-data');
   xhr.upload.addEventListener('progress', (evt) => {
      const { loaded, total } = evt;
      progressElement.value = (loaded / total).toFixed(2);
   });
   xhr.send(new FormData(formElement));
   }, false);