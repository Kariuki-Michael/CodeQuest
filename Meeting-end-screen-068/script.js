

const homePage = document.querySelector('#home-page');
const endScreen = document.querySelector('#end-screen');
const meeting = document.querySelector('#join-meeting');

const joinBtn = document.querySelector('#join-btn');
const rejoinBtn = document.querySelector('#rejoin-btn')
const leaveBtn = document.querySelector('#leave-btn');
const homePageBtn = document.querySelector('#homepage-btn');
const endScreenBtn = document.querySelector('#end-screen-btn');

rejoinBtn.addEventListener('click', rejoinMeeting);

function rejoinMeeting() {
    meeting.style.right = '0px';
    meeting.style.display = 'block';
    endScreen.style.left = '800px';
}

leaveBtn.addEventListener('click', leaveMeeting);

function leaveMeeting() {
    meeting.style.display = 'none'
    endScreen.style.left = '0px';
}

joinBtn.addEventListener('click', joinMeeting);

function joinMeeting() {
    meeting.style.left = '0px';
    meeting.style.display = 'block'
    homePage.style.display = 'none';
}

homePageBtn.addEventListener('click', goToHomePage);

function goToHomePage() {
    homePage.style.left = '0px';
    endScreen.style.left = '800px';
    homePage.style.display = 'block';
}

endScreenBtn.addEventListener('click', endScreenPage);

function endScreenPage() {
    homePage.style.left = '800px';
    endScreen.style.left = '0px';
}