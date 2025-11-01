// This function runs after the entire HTML document has been loaded and parsed.
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the hamburger button and the navigation bar in the HTML.
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    // Add a 'click' event listener to the hamburger button.
    // When the button is clicked, it will run the function inside.
    hamburger.addEventListener('click', function() {
        // This line adds or removes the 'active' class from the navigation bar.
        // Toggling means: if the class is there, remove it; if it's not there, add it.
        // The CSS file uses the '.active' class to show or hide the menu on mobile.
        navbar.classList.toggle('active');
    });

});
