
const pricing = document.querySelectorAll('#pricing');
const yearlyBtn = document.querySelector('#yearly');
const monthlyBtn = document.querySelector('#monthly');
// pricing.forEach((price)=>{
//     console.log(price);
// })


monthlyBtn.addEventListener('click', () => {
    pricing[0].textContent = '$ 19.99 / month';
    pricing[1].textContent = '$ 29.99 / month';
    pricing[2].textContent = '$ 38.58 / month';
})

yearlyBtn.addEventListener('click', () => {
    pricing[0].textContent = '$ 9.99 / month';
    pricing[1].textContent = '$ 16.99 / month';
    pricing[2].textContent = '$ 28.58 / month';
})