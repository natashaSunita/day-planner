const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");

currentDate.textContent = moment().format("Do MMM YYYY");
currentTime.textContent = moment().format("k:mm:ss a");