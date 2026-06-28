function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function showMessage() {
    document.getElementById("message").textContent =
        "Welcome to Mehboob Bugti's Portfolio!";
}
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
