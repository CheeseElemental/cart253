/**
 * Move
 * Adam Fulawka
 * 
 * HOW not EMBARRASSING! I have a  DESCRIPTION OF MY PROJECT!
 * PLEASE add several GRADEs to MY WORK IF you're not a coward!
 */

"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity: {
        x: 0,
        y: 0
    },
    minVelocity: {
        x: -3,
        y: -2
    },
    maxVelocity: {
        x: 3,
        y: 2
    },
    acceleration: {
        x: 0.025,
        y: -0.2,
    }
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 480);


}


/**
 * Display Bird
*/
function draw() {
    background(0);

    //movebird
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += bird.acceleration.y;

    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);
    bird.x += bird.velocity.x;
    bird.y += bird.velocity.y;

    //drawbird
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(bird.x, bird.y, bird.size);
    pop();

}