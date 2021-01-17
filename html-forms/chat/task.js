'use strict';

// переменные
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
let timerID = null;

// события
chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

chatWidgetInput.addEventListener('keydown', (evt) => {
   if (!(evt.key === 'Enter')) {
      return;
   }
   clearInterval(timerID);
   msgUser();
   msgBotReply();
   timerID = setInterval(msgBotIdle, 30000);
});

// пользователь
function msgUser() {
   const msg = chatWidgetInput.value;
   if (!msg) return;
   chatWidgetMessages.insertAdjacentHTML(
      'beforeend',
   msgTemplate(msg, ' message_client'),
   );
   chatWidgetInput.value = '';
   scrollDown();
}

// бот
function msgBotReply() {
   const botMsgList = [
      'Добрый день! До свидания!',
      'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
      'Мы ничего не будем вам продавать!',
      'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
      'Где ваша совесть?',
      'Кто здесь?',
      'Потеряйся!'
   ];
   const botMsgActive = botMsgList[Math.floor(Math.random() * botMsgList.length)];
   setTimeout(() => {
      chatWidgetMessages.insertAdjacentHTML('beforeend', msgTemplate(botMsgActive));
      scrollDown();
   }, 1000);
}

function msgBotIdle() {
   const botMsgList = [
      'Уходя - уходи!',
      'Потерялось наконец?',
      'Каждые 30 секунд молчания рождают дополнительного коррупционера.',
      'Родители не научили, что молчать в трубку невежливо?'
   ];
   const botMsgActive = botMsgList[Math.floor(Math.random() * botMsgList.length)];
   chatWidgetMessages.insertAdjacentHTML('beforeend', msgTemplate(botMsgActive));
   scrollDown();
}

// шаблон сообщения
function msgTemplate(msg, type = '') {
   return `
      <div class="message${type}">
         <div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
         <div class="message__text">
            ${msg}
         </div>
      </div>
   `;
}

// прокрутка
function scrollDown() {
   chatWidgetMessages.lastElementChild.scrollIntoView();
}