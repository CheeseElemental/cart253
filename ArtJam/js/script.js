/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let backgroundShade = 120;


let predX = 60;
let predY = 60;

let preyX = 30;
let preyY = 30;


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
}


function draw() {


    background(backgroundShade);


    /**Predator Object*/
    fill(255, 255, 255);
    stroke(3);
    ellipse(mouseX, mouseY, predX + 200, predY + 200);
    ellipse(mouseX, mouseY, predX + 100, predY + 100);
    ellipse(mouseX, mouseY, predX, predY);


    /**Prey Object*/







}
