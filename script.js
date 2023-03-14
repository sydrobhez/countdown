const inputContainer = document.getElementById('input-container'); //show and hide containers
const countdownForm = document.getElementById('countdownForm'); //get the results from input fields
const dateEl = document.getElementById('date-picker'); //show and hide container

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countDownTitle = '';
let countDownDate = '';
let countdownValue = Date;

// Units of time in milliseconds format
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date input min with today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate Countdown | Complete UI
function updateDom() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance', distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour); // return the left over after the initial number
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate Countdown
    countdownElTitle.textContent = `${countDownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
}

// Value from form input
function updateCountdown(event) {
    event.preventDefault();
    countDownTitle = event.srcElement[0].value;
    countDownDate = event.srcElement[1].value;
    console.log(countDownTitle, countDownDate);
    // Get number version of current date | update DOM
    countdownValue = new Date(countDownDate).getTime();
    console.log('value:', countdownValue);
    updateDom();
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);


