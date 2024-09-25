/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};


let sky = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
};

let bird = {
    x: 0,
    y: 100,
    size: 10,
    speed: 0.25
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {


    background(sky.fill.r, sky.fill.g, sky.fill.b);

    //Mr furios redder and redder
    mrFurious.fill.g -= 1;
    mrFurious.fill.g + constrain(mrFurious.fill.g, 0, 255);
    mrFurious.fill.b -= 1;
    mrFurious.fill.b + constrain(mrFurious.fill.b, 0, 255);


    //move the bird
    bird.x += bird.speed;
    bird.y += bird.speed;


    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    //Braw the Dird
    push();
    rectMode(Center);
    rect(bird.x, bird.y, bird.size, bird.size)
}
