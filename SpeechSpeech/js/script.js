/**
 * Fuck the titile 
 * Dumbass Author
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
let speechIndex = 0;

/**
 * Fuck you Setup
*/
function setup() {
    createCanvas(600, 100);
}


/**
 * Fuck you Draw
*/
function draw() {
    background(0);
    // Get the current Line of the Speech 
    let currentLine = speech[speechIndex];

    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

function mousePressed() {
    //next line
    speechIndex = speechIndex + 1;
    // Handle the end of the Speech
    if (speechIndex >= speech.length) {
        //Start over
        speechIndex = 0;
    }
}