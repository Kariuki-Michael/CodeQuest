
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let interval = null;
const linkItems = document.querySelectorAll('a');
const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header')

const dropDown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropDown.addEventListener('click', ()=>{
    dropdownMenu.classList.toggle('dropdown-active');
})

menuToggle.addEventListener('click', () => {
    header.classList.toggle('active');
});

linkItems.forEach((item) => {
    item.addEventListener('mouseover', (event) => {

        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split('')
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join('');

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    });
});
