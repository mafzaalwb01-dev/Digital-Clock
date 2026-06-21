let timeBox = document.querySelector(".b-time");
let nd = document.querySelector(".b-ND");
let heading = document.querySelector(".b-heading");

setInterval(() => {
  let now = new Date();

  let hours = now.getHours();
  let period = hours >= 12 ? "PM" : "AM";

  nd.textContent = period;

  // Update greeting based on time of day
  if (hours >= 5 && hours < 12) {
    heading.innerHTML = "&#x2600; Good Morning !";
  } else if (hours >= 12 && hours < 17) {
    heading.innerHTML = "&#x1F324; Good Afternoon !";
  } else if (hours >= 17 && hours < 21) {
    heading.innerHTML = "&#x1F307; Good Evening !";
  } else {
    heading.innerHTML = "&#x1F319; Good Night !";
  }

  hours = hours % 12;
  if (hours === 0) hours = 12;

  hours = String(hours).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  timeBox.innerHTML = `<span style="color:#4DEEFF; text-shadow: 0 0 10px #4DEEFF, 0 0 25px #4DEEFF, 0 0 50px #4DEEFF;">${hours}</span><span style="color:#FFFFFF;">:</span><span style="color:#FF6BD6; text-shadow: 0 0 10px #FF6BD6, 0 0 25px #FF6BD6, 0 0 50px #FF6BD6;">${minutes}</span><span style="color:#FFFFFF;">:</span><span style="color:#A78BFA; text-shadow: 0 0 10px #A78BFA, 0 0 25px #A78BFA, 0 0 50px #A78BFA;">${seconds}</span>`;
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
