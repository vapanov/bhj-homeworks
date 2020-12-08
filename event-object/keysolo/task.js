'use strict';

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timeElement = document.querySelectorAll('.symbol').length;
    // запускаем отсчёт
    let timerId = setInterval(this.countdown, 1000);

  }

// функция обратного отсчёта
  countdown() {
   console.log("cd", this.timeElement); // не могу победить области видмости - нужно перечитать

   if (this.timeElement == 0) {
      clearInterval(timerId); //чистим таймер
      setTimeout(() => {}, 100); // нужно чтобы успели отрисоваться нули на странице
      this.fail();
   }
   this.timeElement--;
   document.querySelector('.status__timer').textContent = 'Осталось ' + this.timeElement + ' секунд';
}

  registerEvents() {
      document.addEventListener('keydown', (event) => {
        const symbolCheck = this.currentSymbol.textContent;
        const symbolInput = event.key;
        if (symbolCheck == symbolInput) {
          this.success();
        } else {
          this.fail();
        }
      });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))