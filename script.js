// DOM Elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');
const toggleFormatBtn = document.getElementById('toggleFormat');
const toggleThemeBtn = document.getElementById('toggleTheme');

let is24HourFormat = false;
let isDarkMode = false;

// Update Clock Every Second
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = 'AM';

    // 12-hour format logic
    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 0 to 12
    }

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    ampmElement.textContent = ampm;

    // Toggle AM/PM visibility
    ampmElement.classList.toggle('hidden', is24HourFormat);
}

// Toggle 12/24-Hour Format
toggleFormatBtn.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    toggleFormatBtn.textContent = is24HourFormat ? 'Switch to 12H' : 'Switch to 24H';
    updateClock();
});

// Toggle Dark/Light Mode
toggleThemeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
    toggleThemeBtn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Initialize Clock
updateClock();
setInterval(updateClock, 1000);