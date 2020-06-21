'use strict';

const timerClock = document.getElementById('timer');
let startTime = timerClock.textContent,
    timerStopper;

function timeFormat() {
    let seconds = startTime % 60,
        minutes = Math.floor(startTime % 3600 / 60),
        hours = Math.floor(startTime / 3600);
    
    if (seconds < 10) {
        seconds = '0' + seconds;
    };

    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    if (hours < 10) {
        hours = '0' + hours;
    };

    timerClock.textContent = `${hours}:${minutes}:${seconds}`;
};
    
const counter = function() {
    startTime--;
    timeFormat();
    if (startTime < 1) {
        timerStopper = true;
    } else {
        timerStopper = false;
    };
    return timerStopper;
};

let interval = setInterval(() => {
    counter();
    if (timerStopper === true) {
        clearInterval(interval);
        window.alert("Вы победили в конкурсе!");
    }
}, 1000);