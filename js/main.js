window.addEventListener('load', function() {

    // Smooth scroll navigation init
    scrollSpy(document.querySelector('.navbar'));

    // Smooth scroll anchor init
    smoothScroll.init();

});

/**
 * Top Mobile Menu
 */

var toggleButton = document.getElementById("menu-links");
var menuLink = document.querySelectorAll('.navbar #menu-links ul li a');

function toggleMenu() {
    if (toggleButton.style.display === "block") {
        toggleButton.style.display = "none";
    } else {
        toggleButton.style.display = "block";
    }
}

for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function(event) {
        toggleButton.style.display = "none";
    });
}