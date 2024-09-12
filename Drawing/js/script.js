/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);
}

/**Background Color *


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background("blue")
    Flag();

    strokeWeight(80);
    stroke(34, 176, 12)
    line(400, 230, 550, 270);
    line(80, 300, 5, 600);
}

function Flag() {
    //Red part of Flag
    push();
    noStroke();
    fill("red");
    rect(100, 150, 50, 100);
    pop();

    //White Part of Flag
    push();
    noStroke();
    fill("white");
    rect(150, 150, 50, 100);
    pop();

    //purple part of flag
    push();
    noStroke();
    fill("purple");
    rect(200, 150, 50, 100);
    pop();



}