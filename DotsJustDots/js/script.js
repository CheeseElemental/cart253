/**
 * Dots Just Dots
 * Adam Fulawka
 * Dots move around the screen and the background changes colour.  My dream project
 */

"use strict";

let backgroundShade = 120;

/**These variables don't define an object, but rather, define PARAMETERS for an object that'll be defined later.  
 * I still have to type "ellipse" in the draw function and then reference these parameters to define the ellipse. JFC I just realized this 
 * HOW I refence these parameters is another thing entirely (I have no idea)*/
let circle1 = {
  x: 100,
  y: 100,
  velocity: {
    x: 1,
    y: 1
  },
  width: 60,
  height: 60
};

let circle2 = {
  x: 200,
  y: 200,
  velocity: {
    x: 1,
    y: 1
  },
  width: 60,
  height: 60
};

let circle3 = {
  x: undefined,
  y: undefined,
  velocity: {
    x: 1,
    y: 1
  },
  width: 60,
  height: 60
};



/**Setup includes Canvas colour and size
*/
function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2,);
  noCursor();
}


function draw() {
  // Width Colour Change
  let backgroundShadeX = map(mouseX, 0, width, 0, 255);
  // Height Colour Change
  let backgroundShadeY = map(mouseY, 0, height, 255, 0);

  background(backgroundShadeX, backgroundShadeY, 150);

  /** I still don't really understand what these two lines of code are doing */
  circle1.x += circle1.velocity.x;
  circle1.y += circle1.velocity.y;

  /** ellipse hits side and bounces back*/
  if (circle1.x >= width || circle1.x <= 0) {
    circle1.velocity.x = -circle1.velocity.x;
  }

  circle2.x += circle2.velocity.x;
  circle2.y += circle2.velocity.y;

  /**circle bounces top or bottom and bounces back */
  if (circle2.y >= height || circle2.y <= 0) {
    circle2.velocity.y = -circle2.velocity.y;
  }

  circle1.y = mouseY; // Match mouse on y
  circle2.x = mouseX; // Match mouse on X


  /**Ellipses are Circles, */
  ellipse(circle1.x, circle1.y, circle1.width + 30, circle1.height + 30);
  ellipse(circle2.x, circle2.y, circle2.width, circle2.height);

  circle3.x = mouseX;
  circle3.y = mouseY;
  ellipse(circle3.x, circle3.y, circle3.width - 20, circle3.height - 20);
}