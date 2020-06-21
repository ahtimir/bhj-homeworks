'use strict'

function clearStats()  {
    dead.textContent = 0;
    lost.textContent = 0;
};

document.onclick = (element) => {
    if (element.target.className == 'hole hole_has-mole') {
        dead.textContent ++;
        if (dead.textContent > 9) {
            alert('Победа!');
            clearStats();
        };
    } else {
        lost.textContent ++;
        if (lost.textContent > 4) {
            alert('Игра окончена');
            clearStats();
        };
    };
};

