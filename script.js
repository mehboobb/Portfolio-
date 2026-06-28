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
function changeImage() {
    const image = document.getElementById("portfolioImage");

    if (image.src.includes("image1.jpg")) {
        image.src = "image2.jpg";
    } else {
        image.src = "image1.jpg";
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
}
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
