

const dropDowns = document.querySelectorAll('.dropdown')

dropDowns.forEach(dropDown => {
    const select = dropDown.querySelector('.select');
    const menu  = dropDown.querySelector('.menu');
    const caret = dropDown.querySelector('.caret');

    select.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
        caret.classList.toggle('caret-rotate');
        select.classList.toggle('select-active');
    })
})