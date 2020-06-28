'use strict';

const tabs = Array.from(document.querySelectorAll('.tab')),
    tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener('click', function(event) {
        let closestElement = event.target.closest('.tabs')
        let activeTab = closestElement.querySelector('.tab_active');
        let activeTabContent = closestElement.querySelector('.tab__content_active');

        activeTab.classList.remove('tab_active');
        activeTabContent.classList.remove('tab__content_active');
        tabs[i].classList.toggle('tab_active');
        tabContent[i].classList.toggle('tab__content_active');
    });
};