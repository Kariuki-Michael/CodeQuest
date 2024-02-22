

const myContainer = document.querySelectorAll('.form-box');

myContainer.forEach(holder => {

    const myBtn = holder.querySelector('.showBtn');
    const form = holder.querySelector('.form');


    myBtn.addEventListener('click', () => {
        form.classList.toggle('form-active');
        myBtn.classList.toggle('showBtn-rotate');
    })
})
