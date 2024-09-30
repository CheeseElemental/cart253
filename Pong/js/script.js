/**
 * BiPong
 * Adam Fulawka
 * 
 * HOW not EMBARRASSING! I HAVE an awesome  DESCRIPTION OF MY PROJECT!
 * PLEASE add several letter GRADEs to MY WORK because IT'S GRADED!
 * 
 * Description:  I initially tried to do a "Keepaway" game, but could seem to find any reasources on setting up a function for 
 * measuring distance and having it affect speed.  
 * 
 * I then tried to create a "Viewer" for viewing 3d models.  As far as I can tell, this is impossible in P5 for more complicated models, 
 * but I would be VERY intersted in being proven wrong on this.
 * 
 * I used a youtube tutorial to create a simple pong game, then modified the code to have functional paddles on the top and bottom as well.
 * I did this by duplicating the code from the tutorial and modifying the values.  I'd be lying if I said I had an understanding of how 
 * the functions worked or operated.  
 * 
 * I made this as a backup as it's not the most creative and I intend to attempt the Keepaway game again, but if this is my submission, 
 * it means that exploration didn't produce much.  
 */

"use strict";

let ball;
let leftPaddle;
let rightPaddle
let topPaddle;
let bottomPaddle;
let ballSpeed = 5;


/** Curses!  This is a setup! */
function setup() {
    createCanvas(800, 800);

    // Ball object
    ball = {
        x: width / 2,
        y: height / 2,
        xSpeed: ballSpeed,
        ySpeed: ballSpeed,
        diameter: 20,
    }

    // Paddles 
    leftPaddle = {
        x: 50,
        y: height / 2 - 50,
        width: 10,
        height: 100,
    }

    rightPaddle = {
        x: width - 50,
        y: height / 2 - 50,
        width: 10,
        height: 100,
    }

    topPaddle = {
        x: width / 2 - 50,
        y: height * .03,
        width: 100,
        height: 10,
    }

    bottomPaddle = {
        x: width / 2 - 50,
        y: height - 50,
        width: 100,
        height: 10,

    }
}

function draw() {
    background(0);
    noCursor();

    // making the ball
    fill(255);
    ellipse(ball.x, ball.y, ball.diameter);

    // Ball movement.  Adjust the value of the Variable "ballSpeed" to make this a little more fun
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;


    // */ Code for making  the ball bouncing off paddles

    /**Full disclosure; I don't understand much of the code here.  I can kind of deduce the functionality if I go through it slowly, 
    but I looked up what "&&" means and still dont really get it.*/
    if (ball.x - ball.diameter / 2 < leftPaddle.x + leftPaddle.width) {
        if (ball.y > leftPaddle.y && ball.y < leftPaddle.y + leftPaddle.height)
            ball.xSpeed *= -1;
    }


    if (ball.x + ball.diameter / 2 > rightPaddle.x) {
        if (ball.y > rightPaddle.y && ball.y < rightPaddle.y + rightPaddle.height)
            ball.xSpeed *= -1;
    }
    /**Top and bottom paddles
    Once I added the following 2 "if" statements, the collision for the ball on all four panels became extremely glitchy.  
    I attempted to fix it and made it kind of not-as-bad, but couldn't fix it entirely*/

    if (ball.y - ball.diameter / 2 < topPaddle.y + topPaddle.height &&
        ball.x > topPaddle.x && ball.x < topPaddle.x + topPaddle.width) {
        ball.ySpeed *= -1;
    }

    if (ball.y + ball.diameter / 2 > bottomPaddle.y &&
        ball.x > bottomPaddle.x && ball.x < bottomPaddle.x + bottomPaddle.width) {
        ball.ySpeed *= -1;
    }


    /**  Ball respawn
    So I guess the "||" kind of means "else if" I guess?  
    */
    if (ball.x < 0 || ball.x > width) {
        ball.x = width / 2;
        ball.y = height / 2;
    }

    if (ball.y < 0 || ball.y > height) {
        ball.x = width / 2;
        ball.y = height / 2;
    }


    // Construction and Control of the Paddles
    // Not sure why this is at the end of the code, seems like it should be further up, or included in a "let" statement, 
    //but if the tutorial says jump, I say how high
    fill(255);
    rect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
    rect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
    rect(topPaddle.x, topPaddle.y, topPaddle.width, topPaddle.height);
    rect(bottomPaddle.x, bottomPaddle.y, bottomPaddle.width, bottomPaddle.height);
    leftPaddle.y = constrain(mouseY - leftPaddle.height / 2, 0, height - leftPaddle.height);
    rightPaddle.y = constrain(mouseY - rightPaddle.height / 2, 0, height - rightPaddle.height);
    topPaddle.x = constrain(mouseX - topPaddle.width / 2, 0, width - topPaddle.width);
    bottomPaddle.x = constrain(mouseX - bottomPaddle.width / 2, 0, width - bottomPaddle.width);
}