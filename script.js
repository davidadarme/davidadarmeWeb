// Get the navigation menu element
const menu = document.querySelector('.menu');

// Add event listeners for mouse enter and mouse leave
menu.addEventListener('mouseenter', showMenu);
menu.addEventListener('mouseleave', hideMenu);

// Function to show the menu
function showMenu() {
    menu.classList.add('active');
}

// Function to hide the menu
function hideMenu() {
    menu.classList.remove('active');
}