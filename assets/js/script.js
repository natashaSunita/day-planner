const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");
const hourBlocks = document.querySelectorAll(".hour-text");

currentDate.textContent = moment().format("Do MMM YYYY");
currentTime.textContent = moment().format("k:mm:ss a");

// document.getElementById("hour1-text").classList.add("past");

console.log(hourBlocks);




// target by class
// if time is < then current time
// color grey
// if time is equal to current time
// color green
// if time is > than current time
// color pink