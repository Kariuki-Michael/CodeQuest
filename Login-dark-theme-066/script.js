
// Pages
const loginPage = document.querySelector('#loginPage');
const signUpPage = document.querySelector('#signUpPage');

// Buttons || Links
const loginBtn = document.querySelector('#loginBtn');
const signUpBtn = document.querySelector('#signUpBtn');

signUpBtn.addEventListener('click', () => {
    loginPage.classList.add('hide');
    signUpPage.classList.remove('hide');
});
loginBtn.addEventListener('click', () => {
    signUpPage.classList.add('hide');
    loginPage.classList.remove('hide');
});


