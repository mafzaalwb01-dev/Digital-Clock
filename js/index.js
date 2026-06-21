let timeBox = document.querySelector(".b-time");
let nd = document.querySelector(".b-ND");

setInterval(() => {
  let now = new Date();

  let hours = now.getHours();
  let period = hours >= 12 ? "PM" : "AM";

  nd.textContent = period;

  hours = hours % 12;
  if (hours === 0) hours = 12;

  hours = String(hours).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  timeBox.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
let dateText = document.querySelector(".date-text");
let dayText = document.querySelector(".day-text");

function updateDate() {
  let now = new Date();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  let day = days[now.getDay()];

  dateText.textContent = `📅 ${date} ${month} ${year}`;
  dayText.textContent = day;
}
updateDate();
