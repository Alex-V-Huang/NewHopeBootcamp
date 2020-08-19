// Only allows use of declared variables
'use strict';

// variable dedicated to current displayed image index
var slideIndex = 0;
slideshow();

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

// Write a function that changes the height and width of an image based on user input
function changeImageSize() {

    // Get values for user-inputed height and width

    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;

    // Get the images

    let slides = document.getElementsByClassName("slides");

    // Change the width and height style properties for each image
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
        slides[i].style.height = height;
    }
    // Let the user know they were successful in changing the size. Create a <p> tag.

    let p = document.createElement("p");

    // Add meaningful content that lets the user know what size the image was changed it to.
    p.innerHTML = "You have changed the image to " + width + " by " + height + ".";
    // Add the <p> tag to the DOM
    let results = document.getElementById("results");
    resulta.appendChild(p);

}

// Create variable to keep track of current displayed image
var slideIndex2 = 0;

// Write a function to update the current displayed image
function currentImage(number) {
    // Update slideIndex2
    slideIndex2 = number;

    // Update the actual image
    showImage(slideIndex2);

}

// Write a funtion to change the displayed image
function showImage(n) {
    // Select all images in the second slideshow
    let slides = document.getElementsByClassName("slides2");
    // Hide all images from displaying on page
    for (let i =0; i < slides.length; i++);
        slides[i].style.display = "none";
    // Display the selected image
    slides[n-1].style.display = "block";
}