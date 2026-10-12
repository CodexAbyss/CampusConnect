// Small JavaScript activities for the CampusConnect website

var headingButton = document.getElementById("changeHeadingBtn");
if (headingButton) {
    headingButton.onclick = function () {
        document.getElementById("mainHeading").textContent = "Make your campus life memorable!";
    };
}

var colourButton = document.getElementById("changeCardColorBtn");
if (colourButton) {
    colourButton.onclick = function () {
        var cards = document.querySelectorAll("#homeCards .event-card");
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "#30202a";
        }
    };
}

var highlightButton = document.getElementById("toggleHighlightsBtn");
if (highlightButton) {
    highlightButton.onclick = function () {
        var cards = document.getElementById("homeCards");
        if (cards.style.display === "none") {
            cards.style.display = "flex";
            highlightButton.textContent = "Hide Highlights";
        } else {
            cards.style.display = "none";
            highlightButton.textContent = "Show Highlights";
        }
    };
}

var addButton = document.getElementById("addEventBtn");
if (addButton) {
    addButton.onclick = function () {
        var eventName = document.getElementById("newEventName").value.trim();
        var eventArea = document.getElementById("allEvents");
        var eventMessage = document.getElementById("eventMessage");

        if (eventName === "") {
            eventMessage.textContent = "Please enter an event name first.";
        } else {
            var newCard = document.createElement("div");
            newCard.className = "event-card";

            var title = document.createElement("h3");
            title.textContent = eventName;

            var info = document.createElement("p");
            info.textContent = "New campus event added for practice.";

            newCard.appendChild(title);
            newCard.appendChild(info);
            eventArea.appendChild(newCard);

            document.getElementById("newEventName").value = "";
            eventMessage.textContent = "Event added successfully!";
        }
    };
}

var firstEventButton = document.getElementById("changeEventCardBtn");
if (firstEventButton) {
    firstEventButton.onclick = function () {
        var firstCard = document.querySelector("#allEvents .event-card");
        if (firstCard) {
            firstCard.style.borderColor = "#ff4d5a";
            firstCard.style.backgroundColor = "#30202a";
        }
    };
}

var registerForm = document.getElementById("registrationForm");
if (registerForm) {
    registerForm.onsubmit = function (event) {
        event.preventDefault();

        var name = document.getElementById("studentName").value.trim();
        var email = document.getElementById("studentEmail").value.trim();
        var roll = document.getElementById("studentRoll").value.trim();
        var chosenEvent = document.getElementById("eventChoice").value;
        var formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || roll === "" || chosenEvent === "") {
            formMessage.textContent = "Please fill in every field.";
        } else {
            formMessage.textContent = "Thanks, " + name + "! You are registered for " + chosenEvent + ".";
            registerForm.reset();
        }
    };
}

var fontButton = document.getElementById("changeFontSizeBtn");
if (fontButton) {
    fontButton.onclick = function () {
        var formBox = document.querySelector(".form-box");
        if (formBox.style.fontSize === "18px") {
            formBox.style.fontSize = "16px";
        } else {
            formBox.style.fontSize = "18px";
        }
    };
}

var hideFormButton = document.getElementById("toggleFormBtn");
if (hideFormButton) {
    hideFormButton.onclick = function () {
        var form = document.getElementById("registrationForm");
        if (form.style.display === "none") {
            form.style.display = "block";
            hideFormButton.textContent = "Hide Form";
        } else {
            form.style.display = "none";
            hideFormButton.textContent = "Show Form";
        }
    };
}
