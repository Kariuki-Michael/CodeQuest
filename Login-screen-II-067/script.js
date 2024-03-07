const formContainer = document.querySelectorAll('.form-wrap');

// BUTTONS & TOGGLE
const loginBtn = document.querySelector('#loginButton');
const registerBtn = document.querySelector('#registerButton');
const btnToggle = document.querySelector('#btn');
const passwordShowHide = document.querySelectorAll('.lock-icon')

// PAGES
const loginForm = document.querySelector('#login');
const registerForm = document.querySelector('#register');

// EVENTS
loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);

passwordShowHide.forEach((lockIcon) => {
    lockIcon.addEventListener('click', () => {
        let pwFields =
            lockIcon.parentElement.parentElement.querySelectorAll('.password-field');

        pwFields.forEach((password) => {
            if (password.type === 'password') {
                password.type = 'text';
                lockIcon.classList.replace('fa-lock', 'fa-lock-open');
                return;
            }
            password.type = 'password';
            lockIcon.classList.replace('fa-lock-open', 'fa-lock');
        });
    });
});
function login() {
    loginForm.style.left = '40px';
    registerForm.style.left = '480px';
    btnToggle.style.left = '0';
    loginBtn.classList.add('is-active');
    registerBtn.classList.remove('is-active');
}

function register() {
    loginForm.style.left = '-480px';
    registerForm.style.left = '40px';
    btnToggle.style.left = '50%';
    registerBtn.classList.add('is-active');
    loginBtn.classList.remove('is-active');
}
