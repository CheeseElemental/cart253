/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Curses!  This is a SETUP!!
*/

let chaseSpeed = 2;
let fleeSpeed = 0.5;

let player;
let chase;
let flee;

function setup() {
    /**Oh, it's really that easy to make something that scales to window size, huh? */
    createCanvas(windowWidth, windowHeight);
    noCursor();


    /**Vector is another word for "direction".  
     */
    player = createVector(0, 0);
    /**creating variables that spawn the predator/prey objects mid-field, but offset by 100 pixels*/
    chase = createVector(width / 2 - 100, height / 2);
    flee = createVector(width / 2 + 100, height / 2);

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);

    /**defining the "player" object and mapping it to the movement of the mouse
     */
    player.x = mouseX;
    player.y = mouseY;
    fill(255, 0, 0);
    noStroke();
    ellipse(player.x, player.y, 30, 30);

    /**Went over this section of the tutorial a couple times, I think I got most of it
     * except:
     * - Normalize is confusing (yes I read the docs), but if I remove it, the code still runs, it just breaks
     * - what's the deal with the "p5" in the "p5.Vector" function?  How do I know when I need that?  what would happen without it?
     * - why when I try to put the "let dir" statement in with the other let statements, the code stops working?
     */
    let dir = p5.Vector.sub(player, chase);
    dir.normalize();
    dir.mult(chaseSpeed);
    chase.add(dir);
    fill(0);
    ellipse(chase.x, chase.y, 30, 30);

    /***/
    let distBetween = player.dist(flee);
    if (distBetween < 100) {
        dir = p5.Vector.sub(player, flee);
        dir.normalize();
        dir.mult(fleeSpeed);
        flee.sub(dir);
    }
    fill(0, 150, 255);
    ellipse(flee.x, flee.y, 30, 30);
}