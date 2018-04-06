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

//displays and animates the next element after the current target
function display2(event) {
    
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");/*global'toggle'*//*global"slow"*/ 
 
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "yellow");
 }, function(){
 $(this).css("background-color", "pink");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);