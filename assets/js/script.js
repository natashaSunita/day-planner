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

colourCode();

// Gets textarea input and stores in local storage
saveBtn.forEach(function(element) {
    element.addEventListener("click", function() {
        let time = this.parentElement.getAttribute("id");
        let value = this.previousElementSibling.value;
        localStorage.setItem(time, value);
    })});


