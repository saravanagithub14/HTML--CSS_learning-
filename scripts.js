console.log("Hello World");
alert("Welcome to Student Portal");

let name = "Janu";

console.log(name);


// Find the HTML element that has the ID "profile_button"
// document.getElementById() searches the webpage (document)
// and returns the element matching the specified ID.
//
// Example HTML:
// <button id="profile_button">Profile</button>
let profileButton = document.getElementById("profile_button");


// Add an event listener to the profile button.
// "click" tells JavaScript that we want to detect
// when the user clicks on this button.
//
// The second argument is a function.
// This function will execute whenever the button is clicked.
profileButton.addEventListener("click", function () {

    // alert() displays a popup message in the browser.
    // This code runs only after the user clicks the button.
    alert("Welcome to Janu's profile!");

});


let title = document.getElementById("title");

title.innerText = "Welcome to Janu's Student Portal";