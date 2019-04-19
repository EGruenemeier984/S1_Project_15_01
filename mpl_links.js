"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Ethan Gruenemeier
   Date: 4.18.19
   
   Filename: mpl_links.js

*/
// create an event listener for when the page loads 
window.addEventListener("load", function () {
    // var for the selection lists so that it can target the links
    var allSelect = document.querySelectorAll("#govLinks select");
    // loops through the node list and changes the href value based on the selected option.
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].addEventListener("change", function (e) {
            window.location.href = e.target.value;
        });
    }
});