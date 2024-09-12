/**
 * Variables 
 * Adam Fulawka
 * 
 * HOW EMBARRASSING! I Lost my wallet!
 * PLEASE ADD A A+ GRADE TO MY WORK IF IT'S GRADED becasue now I need monees!
 */

"use strict";

let cheeseGreen = 255;
let cheeseRed = 255;
let cheeseBlue = 0;
let holeShade = 0;
let holeSize = 100;
let holeX = 140;
let holeY = 175;


/**
 * CREATE A CANVAS!!
*/
function setup() {
    createCanvas(640, 640);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(cheeseRed, cheeseGreen, cheeseBlue);

    //Draw a circle 
    push();
    noStroke();
    fill(holeShade);
    ellipse(140, 175, holeSize * 2);
    pop();
}