// Log to console
console.log("About page loaded");

// Show welcome alert when page loads
window.onload = function() {
    alert("Welcome to our About page!");
}

// Change color of headings when clicked
const headings = document.querySelectorAll("h2, h3");
headings.forEach(h => {
    h.addEventListener("click", () => {
        h.style.color = "#e67e22"; // Change color on click
    });
});
