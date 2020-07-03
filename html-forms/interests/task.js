'use strict';

const interestsList = document.querySelectorAll('.interest');

function groupCheck(event) {
    if (event.target.closest('.interest').querySelector('.interests_active')) {
        let checkboxes = event.target.closest('.interest').querySelectorAll('.interest__check');
        for (let i = 0; i < checkboxes.length; i++) {
            if (event.target.checked) {
                checkboxes[i].checked = true;
            } else {
                checkboxes[i].checked = false;
            };
        };
    };
};

for (let i = 0; i < interestsList.length; i++) {
    interestsList[i].addEventListener('change', groupCheck);
};