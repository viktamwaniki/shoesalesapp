// Get references to the four buttons using their IDs
const button1 = document.getElementById('nike');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

// Add event listeners to the buttons
nike.addEventListener('click', () => openLinkedPage('nike2.html'));
button2.addEventListener('click', () => openLinkedPage('page2.html'));
button3.addEventListener('click', () => openLinkedPage('page3.html'));
button4.addEventListener('click', () => openLinkedPage('page4.html'));

// Function to open the linked HTML page
function openLinkedPage(pageUrl) {
  window.location.href = pageUrl;
}
