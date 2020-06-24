'use strict';

const menuItems = Array.from(document.getElementsByClassName('menu_sub'));

function closeMenu() {
    const menuIndex = menuItems.indexOf(document.querySelector('.menu_active'));
    menuItems[menuIndex].className = 'menu menu_sub';
};

function isMenuActive() {
    let activeMenuIndicator = document.querySelector('.menu_active');
    return menuItems.includes(activeMenuIndicator);
};

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].closest('li').onclick = (event) => {
        event.preventDefault();

        if (menuItems[i].classList.contains('menu_active')) {
            closeMenu();
            return;
        } else if (isMenuActive()) {
            closeMenu();
        };
        
        menuItems[i].className = 'menu menu_sub menu_active';
    };
};