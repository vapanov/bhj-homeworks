'use strict';

class Game {
  constructor(container) {
    this.container = container;
    this.timerId = null;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.stopTimer();
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timerElement.textContent = document.querySelectorAll('.symbol').length;
    this.startTimer();
  }

  startTimer () {
    this.timerID = setInterval(this.timer.bind(this), 1000);
  }

  timer () {
    let timerCount = parseInt(this.timerElement.textContent, 10);
    timerCount -= 1;
    this.timerElement.textContent = timerCount;
    if (timerCount < 0) {
      this.fail();
    }
  }

  stopTimer () {
    clearInterval(this.timerID);
    this.timerID = null;
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
    this.stopTimer();
    this.setNewWord();
    this.timerElement.textContent = document.querySelectorAll('.symbol').length;
    this.startTimer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.stopTimer();
    this.setNewWord();
    this.timerElement.textContent = document.querySelectorAll('.symbol').length;
    this.startTimer();
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