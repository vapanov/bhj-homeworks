'use strict';

const divPollTitle = document.querySelector('div#poll__title');
const divPollAnswers = document.querySelector('div#poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type','application/json');
xhr.responseType ='json';
xhr.send();
xhr.addEventListener('readystatechange', function() {
   if (xhr.readyState === 4) {
      const pollResponce = xhr.response;
      divPollTitle.insertAdjacentHTML('afterbegin', pollResponce.data.title);
      
      Object.values(pollResponce.data.answers).forEach((element) => addAnswerTemplate(element));
   };
});

function addAnswerTemplate (answer) {
   const newButton = document.createElement('button');
   newButton.className = "poll__answer";
   newButton.innerHTML = answer;
   newButton.addEventListener('click', (evt) => {alert('Спасибо, ваш голос засчитан!')});
   divPollAnswers.append(newButton);

}