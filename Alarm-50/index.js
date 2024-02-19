

const myTime = document.querySelectorAll('.alarm-time');

myTime.forEach(time =>{
    const myButton = time.querySelector('.slider-btn')
    const circle = time.querySelector('.circle');
    const text = time.querySelector('.time-txt');

    myButton.addEventListener('click', () =>{
        
        circle.classList.toggle('circle-active');
        text.classList.toggle('time-active');
    })
})