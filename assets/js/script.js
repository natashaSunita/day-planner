const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");
const hourBlocks = document.querySelectorAll(".rows");
const taskInput = document.querySelectorAll(".hour-text");
const saveBtn = document.querySelectorAll(".save");


// Display current date and time using moment
currentDate.textContent = moment().format("Do MMM YYYY");
currentTime.textContent = moment().format("k:mm:ss a");

// colour timeblocks depending on current time
function colourCode() {
    let currentHour = moment().format("HH");
    for (let i = 0; i < hourBlocks.length; i++) {
        let h = hourBlocks[i].getAttribute("id").slice(5);
        if (h < currentHour) {
            hourBlocks[i].children[1].classList.add("past");
        } else if (h == currentHour) {
            hourBlocks[i].children[1].classList.add("present");
        } else if (h > currentHour) {
            hourBlocks[i].children[1].classList.add("future");
        }
    }
}

// Gets textarea input and stores in local storage
saveBtn.forEach(function(element) {
    element.addEventListener("click", function() {
        let time = this.parentElement.getAttribute("id");
        let value = this.previousElementSibling.value;
        localStorage.setItem(time, value);
    })});

// Retrieve each time's saved value from local storage
taskInput[0].value = localStorage.getItem("hour-09");
taskInput[1].value = localStorage.getItem("hour-10");
taskInput[2].value = localStorage.getItem("hour-11");
taskInput[3].value = localStorage.getItem("hour-12");
taskInput[4].value = localStorage.getItem("hour-13");
taskInput[5].value = localStorage.getItem("hour-14");
taskInput[6].value = localStorage.getItem("hour-15");
taskInput[7].value = localStorage.getItem("hour-16");
taskInput[8].value = localStorage.getItem("hour-17");

colourCode();
