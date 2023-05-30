function changeColor(color) {
    document.body.style.backgroundColor = color;
}

var rotationCount = 0;

function rotate() {
    var replayBtn = document.getElementById("replayBtn");
    rotationCount += 360;
    replayBtn.style.transform = 'rotate(' + rotationCount + 'deg)';
}

function changeButtonColor() {
    var changeColorBtn = document.getElementById("button1");
    var currentColor = changeColorBtn.style.backgroundColor;

    if (currentColor === "red") {
        changeColorBtn.style.backgroundColor = "blue";
    } else {
        changeColorBtn.style.backgroundColor = "red";
    }
}

function alertUser() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var alertMessage = document.getElementById("alert-message");
    var alertContent = document.querySelector(".alert-content");

    if (name.trim() === "" || surname.trim() === "") {
        alertMessage.textContent = "Please fill in both fields!";
        alertContent.classList.add("error");
    } else {
        alertMessage.textContent = "Ahoj " + name + " " + surname + "!";
        alertContent.classList.remove("error");
    }

    displayAlert();
}

function displayAlert() {
    var alertDiv = document.getElementById("alert");
    alertDiv.style.display = "block";
}

function closeAlert() {
    var alertDiv = document.getElementById("alert");
    alertDiv.style.display = "none";
}