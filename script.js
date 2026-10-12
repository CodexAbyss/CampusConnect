
 // HOME PAGE: Change the main heading
const changeHeadingBtn = document.getElementById("changeHeadingBtn");

if (changeHeadingBtn) {
    changeHeadingBtn.addEventListener("click", function () {
        const heading = document.getElementById("mainHeading");
        heading.textContent = "Your Next Campus Adventure Starts Here!";
    });
}

// HOME PAGE: Change the background colour of an event card
const changeCardColorBtn = document.getElementById("changeCardColorBtn");

if (changeCardColorBtn) {
    changeCardColorBtn.addEventListener("click", function () {
        const card = document.getElementById("homeCard1");
        card.classList.toggle("card-highlight");
    });
}

// HOME PAGE: Show or hide the event highlights section
const toggleHighlightsBtn = document.getElementById("toggleHighlightsBtn");

if (toggleHighlightsBtn) {
    toggleHighlightsBtn.addEventListener("click", function () {
        const highlights = document.getElementById("eventHighlights");
        highlights.classList.toggle("hidden");
    });
}

// EVENTS PAGE: Add an event name
const addEventBtn = document.getElementById("addEventBtn");

if (addEventBtn) {
    addEventBtn.addEventListener("click", function () {
        const eventInput = document.getElementById("eventNameInput");
        const eventMessage = document.getElementById("eventMessage");
        const addedEventArea = document.getElementById("addedEventArea");
        const eventName = eventInput.value.trim();

        if (eventName === "") {
            eventMessage.textContent = "Please enter an event name first.";
            eventMessage.className = "message error";
            return;
        }

        // Create a new element to display the event name
        const newEvent = document.createElement("div");
        newEvent.classList.add("added-event");
        newEvent.textContent = eventName;
        addedEventArea.appendChild(newEvent);

        eventMessage.textContent = "Event name submitted successfully!";
        eventMessage.className = "message success";
        eventInput.value = "";
    });
}

// EVENTS PAGE: Change the appearance of the first event card
const changeEventCardBtn = document.getElementById("changeEventCardBtn");

if (changeEventCardBtn) {
    changeEventCardBtn.addEventListener("click", function () {
        const eventCard = document.getElementById("eventCard1");
        eventCard.classList.toggle("card-highlight");
    });
}

// REGISTRATION PAGE: Validate fields and show confirmation
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        // Prevent the page from reloading
        event.preventDefault();

        const studentName = document.getElementById("studentName").value.trim();
        const rollNumber = document.getElementById("rollNumber").value.trim();
        const emailAddress = document.getElementById("emailAddress").value.trim();
        const eventSelection = document.getElementById("eventSelection").value;
        const registrationMessage = document.getElementById("registrationMessage");

        // Check whether any required field is empty
        if (
            studentName === "" ||
            rollNumber === "" ||
            emailAddress === "" ||
            eventSelection === ""
        ) {
            registrationMessage.textContent =
                "Error: Please fill in all required fields.";
            registrationMessage.className = "message error";
            return;
        }

        // Display a personalised confirmation
        registrationMessage.textContent =
            "Thank you, " + studentName +
            "! Your sample registration for " +
            eventSelection + " is confirmed.";

        registrationMessage.className = "message success";
    });
}

// REGISTRATION PAGE: Change the heading font size
const changeFontSizeBtn = document.getElementById("changeFontSizeBtn");

if (changeFontSizeBtn) {
    changeFontSizeBtn.addEventListener("click", function () {
        const heading = document.getElementById("registrationHeading");

        if (heading.style.fontSize === "2rem") {
            heading.style.fontSize = "3rem";
        } else {
            heading.style.fontSize = "2rem";
        }
    });
}

// REGISTRATION PAGE: Show or hide the registration form
const toggleFormBtn = document.getElementById("toggleFormBtn");

if (toggleFormBtn) {
    toggleFormBtn.addEventListener("click", function () {
        const formPanel = document.getElementById("registrationFormPanel");
        formPanel.classList.toggle("hidden");
    });
}
