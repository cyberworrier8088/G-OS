const fileIcon = document.getElementById("files-icon");
const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
const clock = document.getElementById("clock");


// file icon
fileIcon.addEventListener("click", () => {
    alert("File app clicked!");
});


// start menu
startButton.addEventListener("click", (event) => {
    event.stopPropagation();

    startMenu.classList.toggle("open");
});


// close menu when clicking outside the menu
document.addEventListener("click", (event) => {
    if (
        !startMenu.contains(event.target) && !startButton.contains(event.target)
    ) {
        startMenu.classList.remove("open");
    }
});

// clock
function updateClock() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");

    const minutes = String(now.getMinutes()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}`;
}

updateClock();

setInterval(updateClock, 1000);

console.log("OS loaded successfully");