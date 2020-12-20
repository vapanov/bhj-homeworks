'use strict';



  startTimer () {
    this.timerID = setInterval(this.timer.bind(this), 1000);
  }
