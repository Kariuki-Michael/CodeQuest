
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');

const aboutLink = document.querySelector('#about-link');
const skillLink = document.querySelector('#skill-link');
const portfolioLink = document.querySelector('#portfolio-link');
const links = document.querySelector('a');
const myButton = document.querySelector('button')

let aboutNav = document.querySelector('.about-link');
let skillNav = document.querySelector('.skill-link');
let portfolioNav = document.querySelector('.portfolio-link');


aboutLink.addEventListener('click', () => {
  about.classList.remove('hide');
  skills.classList.add('hide');
  portfolio.classList.add('hide');

  aboutNav.classList.add('is-active')
  skillNav.classList.remove('is-active')
  portfolioNav.classList.remove('is-active')
});

skillLink.addEventListener('click', () => {
  skills.classList.remove('hide');
  about.classList.add('hide');
  portfolio.classList.add('hide');

  skillNav.classList.add('is-active')
  aboutNav.classList.remove('is-active')
  portfolioNav.classList.remove('is-active')
});

portfolioLink.addEventListener('click', () => {
  portfolio.classList.remove('hide');
  skills.classList.add('hide');
  about.classList.add('hide');

  portfolioNav.classList.add('is-active')
  skillNav.classList.remove('is-active')
  aboutNav.classList.remove('is-active')
});

myButton.addEventListener('click', () => {
    const contact = document.querySelector('.contact');

    contact.classList.toggle('contact-active');
})
