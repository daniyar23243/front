const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//LOgos movement
const logos = document.querySelector('.rotating-logos__track').cloneNode(true);
document.querySelector('.rotating-logos').appendChild(logos);