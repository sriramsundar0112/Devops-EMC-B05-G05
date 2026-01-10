// Log to console
console.log("About page loaded");

// Show welcome alert when page loads
// window.onload = function() {
//     alert("Welcome to our About page!");
// }

// Change color of headings when clicked

const headings = document.querySelectorAll("h2, h3");
headings.forEach(h => {
    h.addEventListener("click", () => {
        h.style.color = "#e67e22"; // Change color on click
    });
});

// Log to console
console.log("script.js loaded");

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");

// Safety check
if (!form) {
    console.error("❌ loginForm not found");
}
if (!usernameInput) {
    console.error("❌ username input not found");
}

// Bind submit event to function
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload
    showWelcomeMessage();
});

function showWelcomeMessage() {
    console.log("Entered showWelcomeMessage method");

    const username = usernameInput.value;
    console.log("Entered username is:", username);
    alert("Welcome  "+username)

    if (username === "") {
        alert("Please enter your username");
        return;
    }

    alert("Welcome " + username);
}
