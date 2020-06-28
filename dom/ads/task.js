'use strict';

const rotatorCase = document.querySelectorAll('.rotator__case');
let activeCaseIndex = 0,
    speed,
    color;

let advancedRotationFunction = () => {
    speed = rotatorCase[activeCaseIndex].getAttribute('data-speed');
    color = rotatorCase[activeCaseIndex].getAttribute('data-color');
    rotatorCase[activeCaseIndex].style.color = color;

    setTimeout(() => {
        if (activeCaseIndex === rotatorCase.length - 1) {
            rotatorCase[activeCaseIndex].classList.remove('rotator__case_active');
            activeCaseIndex = 0;
            rotatorCase[activeCaseIndex].classList.add('rotator__case_active'); 
        } else {
            rotatorCase[activeCaseIndex].classList.remove('rotator__case_active');
            rotatorCase[activeCaseIndex].nextElementSibling.classList.add('rotator__case_active');
            activeCaseIndex++;
        };
        advancedRotationFunction();
    }, speed);
};

advancedRotationFunction();
