'use strict';

const editorElement = document.querySelector('#editor');

window.onload = () => {
   editorElement.value = localStorage.getItem('editorElement');
}

editorElement.addEventListener('input', (evt) => {
   evt.preventDefault();
   localStorage.setItem('editorElement', editorElement.value);
   }, false);