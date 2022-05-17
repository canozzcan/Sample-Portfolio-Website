const hamburgerContainerElement = document.querySelector('#header__main-nav');
const hamburgerElement = document.querySelector('.header__main-nav--hamburger');
const linkElements = document.querySelectorAll('.header__main-nav--links li');

hamburgerElement.addEventListener('click', () => {
    hamburgerContainerElement.classList.toggle('clicked');
    linkElements.forEach((link) => {
        link.classList.toggle('fade');
    });
});