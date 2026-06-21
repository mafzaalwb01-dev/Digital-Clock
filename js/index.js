// DOM Elements
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const periodBadge = document.getElementById("period-badge");
const greetingText = document.getElementById("greeting-text");
const greetingIcon = document.getElementById("greeting-icon");
const dateText = document.getElementById("date-text");
const dayText = document.getElementById("day-text");

// Month & Day names
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

// Update greeting based on hour
function updateGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    greetingText.textContent = "Good Morning!";
    greetingIcon.textContent = "☀️";
  } else if (hour >= 12 && hour < 17) {
    greetingText.textContent = "Good Afternoon!";
    greetingIcon.textContent = "🌤️";
  } else if (hour >= 17 && hour < 21) {
    greetingText.textContent = "Good Evening!";
    greetingIcon.textContent = "🌇";
  } else {
    greetingText.textContent = "Good Night!";
    greetingIcon.textContent = "🌙";
  }
}

// Update time
function updateClock() {
  const now = new Date();

  let hour24 = now.getHours();
  const period = hour24 >= 12 ? "PM" : "AM";
  periodBadge.textContent = period;

  updateGreeting(hour24);

  let hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;

  hoursEl.textContent = String(hour12).padStart(2, "0");
  minutesEl.textContent = String(now.getMinutes()).padStart(2, "0");
  secondsEl.textContent = String(now.getSeconds()).padStart(2, "0");
}

// Update date
function updateDate() {
  const now = new Date();
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const day = days[now.getDay()];

  dateText.textContent = `📅 ${date} ${month} ${year}`;
  dayText.textContent = day;
}

// Initialize
updateClock();
updateDate();

// Update every second
setInterval(() => {
  updateClock();
  updateDate();
}, 1000);
