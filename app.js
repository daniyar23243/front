const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//LOgos movement
const logos = document.querySelector('.rotating-logos__track').cloneNode(true);
document.querySelector('.rotating-logos').appendChild(logos);

//function to toggle monthly/yearly pricing

function switchPricing() {
    const checkbox = document.getElementById('pricing-toggle-checkbox');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const yearlyDiscounts = document.querySelector('.save-percentage');
    if (checkbox.checked) {
        monthlyPrices.forEach(price => price.classList.add('hidden'));
        yearlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyDiscounts.style.display = 'inline';
    }
    else {
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyPrices.forEach(price => price.classList.add('hidden'));
        yearlyDiscounts.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

