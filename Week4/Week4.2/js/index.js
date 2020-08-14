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

    // Get the images

    // Change the width and height style properties for each image

    // Let the user know they were successful in changing the size. Create a <p> tag.

    // Add meaningful content that lets the user know what size the image was changed it to.

    // Add the <p> tag to the DOM

}

// Create variable to keep track of current displayed image
var slideIndex2 = 0;

// Write a function to update the current displayed image
function currentImage(number) {
    // Update slideIndex2

    // Update the actual image

}

// Write a funtion to change the displayed image
function showImage(n) {
    // Select all images in the second slideshow

    // Hide all images from displaying on page

    // Display the selected image
}