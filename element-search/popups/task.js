"use strict";

const modalList = Array.from(document.querySelectorAll(".modal__close"));
document.getElementById("modal_main").className = "modal modal_active";

for (let i = 0; i < modalList.length; i++) {
    modalList[i].onclick = () => {
        document.getElementById("modal_main").className = "modal";
        document.getElementById("modal_success").className = "modal";    
    };
};

document.querySelector(".show-success").onclick = () => {
    document.getElementById("modal_main").className = "modal";
    document.getElementById("modal_success").className = "modal modal_active";    
};