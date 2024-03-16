

const loginBtn = document.getElementById('login-btn');
const menu = document.getElementById('menu');
const landingPage = document.getElementById('landing');

loginBtn.addEventListener('click', () => {
    landingPage.style.left = '-50em';
    menu.style.left = '0em';
    console.log('menu');
});