const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");
const hourBlocks = document.querySelectorAll(".rows");

currentDate.textContent = moment().format("Do MMM YYYY");
currentTime.textContent = moment().format("k:mm:ss a");

const thing = hourBlocks[0].getAttribute("id");
console.log(thing.slice(5));

function colourCode() {
    let currentHour = moment().format("HH");
    for (let i = 0; i < hourBlocks.length; i++) {
        let h = hourBlocks[i].getAttribute("id").slice(5);
    }
    if (h < currentHour) {
        
    }
}

colourCode();
// 



// shape of i, thirsty, what am I doing?

// target by class
// if time is < then current time
// color grey
// if time is equal to current time
// color green
// if time is > than current time
// color pink