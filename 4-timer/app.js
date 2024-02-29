const month = document.getElementById("month");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const currentYear = new Date().getFullYear();

const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

function timer() {
    const currentDate = Date.now();
    console.log(currentDate);
    const diff = newYear - currentDate;
    const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    month.innerHTML = months < 10 ? '0' + months : months;
    day.innerHTML = days < 10 ? '0' + days : days;
    hour.innerHTML = hours < 10 ? '0' + hours : hours;
    minute.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    second.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

// setInterval(Timer, 1000);