// Only allows use of declared variables
'use strict';

// variable dedicated to current displayed image index
var slideIndex = 0;

if (window.location.href.indexOf('merch') > -1) {
    slideshow();
}

function slideshow() {

    // Select all of the images in the slideshow
    var x = document.getElementsByClassName("slides");

    // Hide all images from displaying on the page
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // Increase current displayed image index by 1
    slideIndex++;

    // If all of the images have been displayed, display the first image
    if (slideIndex > x.length) {
        slideIndex = 1
    }

    // Display the current image on the page
    x[slideIndex-1].style.display = "block";

    // Wait two seconds before displaying the next image
    setTimeout(slideshow, 2000);
}

var slideIndex2 = 0;

function currentImage(number) {
    slideIndex2 = number;
    showImage(slideIndex);
}

function showImage(n) {
    // Select all images in the second slideshow
    var x = document.getElementsByClassName("slides2");

    // Hide all images from displaying on page
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // Display the selected image
    x[slideIndex2-1].style.display = "block";
}

// Write a function that chooses a random website and opens it in a new tab
function goRandomWebsite() {
    // Get all of the websites
    let websites = document.getElementsByClassName("project-link");
    console.log(websites);

    // Choose a website by random
    let randomNumber = Math.floor(Math.random() * websites.length);
    console.log(randomNumber);

    // Get the selected website
    let selectedWebsite = websites[randomNumber];

    // Get the url of the selected website
    let url = selectedWebsite.getAttribute("href");
    console.log(url);

    // Open the url in a new tab
    window.open(url, "_blank");
}

// When the user clicks the button, open the modal 
function openModal() {

    console.log(this);
    // Get the modal
    let modal = document.getElementById("myModal");
    // Display the modal on the page
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    // Get the modal
    let modal = document.getElementById("myModal");
    // Hide the modal from displaying on the page
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    // Get the modal
    let modal = document.getElementById("myModal");
    // If user clicked anywhere outside of the modal
    if (event.target == modal) {
        // Hide the modal from displaying on the page
        modal.style.display = "none";
    }
}