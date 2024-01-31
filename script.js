// Get the dark mode toggle button, body element, and top container
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const topContainer = document.querySelector(".top-container");

// Check if dark mode preference is stored in localStorage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Set initial dark mode state
if (isDarkMode) {
    body.classList.add("dark-mode");
    topContainer.classList.add("dark-mode");
    darkModeToggle.innerText = 'Light'; // Change button text to 'Light'
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    // Toggle the dark mode class on the body and top container
    body.classList.toggle("dark-mode");
    topContainer.classList.toggle("dark-mode");

    // Update button text based on the dark mode state
    darkModeToggle.innerText = body.classList.contains("dark-mode") ? 'Light' : 'Dark';

    // Store the dark mode preference in localStorage
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});
// Add this function to open the contact modal
function openContactModal() {
    const contactModal = document.getElementById("contactModal");
    contactModal.style.display = "block";
}

// Add this function to close the contact modal
function closeContactModal() {
    const contactModal = document.getElementById("contactModal");
    contactModal.style.display = "none";
}

// Get the contact form and add a submit event listener
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle form submission logic (send data to server or perform actions)
    // You can also add validation and other necessary actions here
    closeContactModal(); // Close the modal after form submission
    alert();


});

// Update your existing "Contact Me" button with the onclick attribute
// to trigger the openContactModal function
