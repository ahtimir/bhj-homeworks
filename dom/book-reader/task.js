'use strict';

const book = document.getElementById('book'),
    bookContent = book.querySelector('.book__content'),
    
    fontSizeElements = document.querySelectorAll('.font-size');
       

for (let i = 0; i < fontSizeElements.length; i++) {
    fontSizeElements[i].addEventListener('click', (event) => {
        event.preventDefault();
    
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
    
        if (event.target.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else if (event.target.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        } else {
            book.className = 'book';
        };
    });
};

