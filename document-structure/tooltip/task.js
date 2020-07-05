'use strict';

const clickableTips = document.querySelectorAll('.has-tooltip');
let tipHtmlContainer;

for (let i = 0; i < clickableTips.length; i++) {
    clickableTips[i].addEventListener('click', (event) => {
        event.preventDefault();
              
        let tooltipSiblings = clickableTips[i].nextElementSibling;
        if (tooltipSiblings != null && tooltipSiblings.classList.contains ('tooltip')) {
            tooltipSiblings.remove();
            return;
        };

        let open_tooltip = document.querySelector('.tooltip');
        if (open_tooltip != null) {
            open_tooltip.remove();
        };

        tipHtmlContainer = `<div class="tooltip" style="display: block; 
                            left: ${event.target.offsetLeft}px; 
                            top: ${event.target.offsetTop + 20}px;"> 
                            ${event.target.title}
                            </div>`;
        
        event.target.insertAdjacentHTML('afterend', tipHtmlContainer);
    });

    function hideOnScroll() {
        clickableTips.forEach((item) => {
            let tipsToDelete = document.querySelector('.tooltip');
            
            if (tipsToDelete === null) {
                return;
            };

            tipsToDelete.remove();
        });
    };
    document.addEventListener('scroll', hideOnScroll);
};