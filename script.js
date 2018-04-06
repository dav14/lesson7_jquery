/*
Program Name: Recipe Display Application
Author: Daniel Vincent
Date: April 6, 2018
Filename: script.js
*/

//display the next element after the current target
function display(event) {

$(event.currentTarget).next().fadeIn("slow"); /*global"slow"*/

}//end of display

//attach event listner to h3 elements to invoke display function when clicked
$("h3").click(display); /*global $*/

