"use strict";

let bubbles = [];

function setup() {
    createCanvas(400, 400);
}

function createBubble() {
    return {
        x: random(width),
        y: height,
        size: random(20, 50),
        speed: random(1, 3)
    };
}

function draw() {
    background("#add8e6");
    for (let bubble of bubbles) {
        moveBubble(bubble);
        drawBubble(bubble);
    }
}

function moveBubble(bubble) {
    bubble.y -= bubble.speed; // Bubbles move up
    if (bubble.y < 0 - bubble.size) {
        // Remove bubble if it floats off-screen
        let index = bubbles.indexOf(bubble);
        bubbles.splice(index, 1);
    }
}

function drawBubble(bubble) {
    fill(255, 200, 200, 150);
    ellipse(bubble.x, bubble.y, bubble.size);
}

function mousePressed() {
    for (let bubble of bubbles) {
        let d = dist(mouseX, mouseY, bubble.x, bubble.y);
        if (d < bubble.size / 2) {
            let index = bubbles.indexOf(bubble);
            bubbles.splice(index, 1);
            break; // Prevents removing multiple bubbles with one click
        }
    }
}

function keyPressed() {
    let newBubble = createBubble();
    bubbles.push(newBubble);
}