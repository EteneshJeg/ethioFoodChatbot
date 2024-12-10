// Select elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle the menu visibility when the hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close the menu if clicking outside of it
window.addEventListener("click", event => {
  if (event.target !== hamburger && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});


function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotIcon = document.getElementById('chatbot-icon');

    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'block';
        chatbotIcon.style.display = 'none';
    } else {
        chatbotContainer.style.display = 'none';
        chatbotIcon.style.display = 'block';
    }
}

window.onclick = function (event) {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotIcon = document.getElementById('chatbot-icon');
    if (
        event.target !== chatbotContainer &&
        event.target !== chatbotIcon &&
        event.target !== document.getElementById('close-chatbot')
    ) {
        chatbotContainer.style.display = 'none';
        chatbotIcon.style.display = 'block';
    }
};
