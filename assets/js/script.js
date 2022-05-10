const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");
const hourBlocks = document.querySelectorAll(".rows");

// Display current date and time using moment
currentDate.textContent = moment().format("Do MMM YYYY");
currentTime.textContent = moment().format("k:mm:ss a");

const thing = hourBlocks[0].getAttribute("id");
console.log(hourBlocks[0].children[1]);

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




// shape of i, thirsty, what am I doing? websites and their layers
// whtat would I like to be really good at? drawing? music? biology? gardening?

// target by class
// if time is < then current time
// color grey
// if time is equal to current time
// color green
// if time is > than current time
// color pink