'use strict';

const dropButton = document.getElementsByClassName('dropdown'),
    dropList = document.getElementsByClassName('dropdown__list'),
    dropDownValue = document.getElementsByClassName('dropdown__value'),
    dropLink = Array.from(document.getElementsByClassName('dropdown__link'));

function dropDown() {
    if (dropButton[0].querySelector('ul').className === 'dropdown__list dropdown__list_active') {
        dropButton[0].querySelector('ul').className = 'dropdown__list';
    } else {
        dropButton[0].querySelector('ul').className = 'dropdown__list dropdown__list_active';
    };
};

dropButton[0].addEventListener('click', dropDown);

dropList[0].onclick = (event) => {
    event.preventDefault();
    dropDownValue[0].textContent = event.target.innerText;
};