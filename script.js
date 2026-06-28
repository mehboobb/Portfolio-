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

    }
    
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.textContent = "Please fill in both your name and email.";
        error.style.color = "red";
        return false;
    }

    error.textContent = "Form submitted successfully!";
    error.style.color = "green";
    return false; // Prevents page refresh for now
function createTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    li.onclick = function () {
        li.remove();
        removeTask(task);
    };

    document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(createTask);
};
}
const quotes = [
    "Success comes from consistency.",
    "Practice makes progress.",
    "Every expert was once a beginner.",
    "Believe in yourself.",
    "Keep learning every day.";
}
    const quotes = [
    "Dream big and never give up.",
    "Success comes from consistency.",
    "Every expert was once a beginner.",
    "Hard work beats talent when talent doesn't work hard.",
    "Keep learning every day."

