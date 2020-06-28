'use strict';

const block = document.querySelectorAll('.reveal');

function isInViewport(element) {
    for (let i = 0; i < element.length; i++)  {
        const viewportHeight = window.innerHeight;
        const elementTop = element[i].getBoundingClientRect().top;
        if (elementTop < viewportHeight && elementTop > 0) {
            element[i].classList.add('reveal_active');
        };
    };
};

document.addEventListener('scroll', function() {
    isInViewport(block);
});
