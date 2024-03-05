const applyButton = document.querySelector('#applyBtn');
const viewJobButton = document.querySelector('#viewJobBtn');
const closeButton = document.querySelector('#closeBtn');
const closedButton = document.querySelector('#closedBtn');
const submitButton = document.querySelector('#submitBtn');

const jobHomePage = document.querySelector('#jobHomePage');
const formApplication = document.querySelector('#jobApplication');
const formDetails = document.querySelector('#formDetails');
const popUp = document.querySelector('#popUp');
const jobDetails = document.querySelector('#jobDetails');

applyButton.addEventListener('click', () => {
    if (formApplication.classList.contains('hide')) {
        formApplication.classList.remove('hide');
        formDetails.classList.remove('hide');
        jobHomePage.classList.add('hide');
    } else {
        popUp.classList.add('hide');
        formDetails.classList.remove('hide');
    }
});
closeButton.addEventListener('click', () => {
    jobHomePage.classList.remove('hide');
    formApplication.classList.add('hide');
    popUp.classList.add('hide');
    formDetails.classList.add('hide');
});
submitButton.addEventListener('click', () => {
    formDetails.classList.add('hide');
    popUp.classList.remove('hide');
});
viewJobButton.addEventListener('click', () => {
    jobDetails.classList.remove('hide');
    jobHomePage.classList.add('hide');
});

closedButton.addEventListener('click', () => {
    jobDetails.classList.add('hide')
    jobHomePage.classList.remove('hide')
})
