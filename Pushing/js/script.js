// Stones that will move around
let stones = [];
    let velx;
    let vely;

    let setVel;
/**
 * Creates the canvas and four stones
 */
function setup() {
    createCanvas(500, 500);

    addStone();
    addStone();
    addStone();

    //set velocity variables 
    velx = random(.1, .9);
    vely = random(.1, .9);
    setVel = random (.005, 2);
}

/**
 * Adds a random stone to the world
 */
function addStone() {
    // Get random arguments
    const x = random(0, width);
    const y = random(0, height);
    const size = (20,20);
    // Create the stone
    const stone = createStone(x, y, size);
    // Add the stone to the array
    stones.push(stone);
}

//Create the stones (little and white stones)
function createStone(x, y, size) {
    const stone = {
        // Position and dimensions
        x: x,
        y: y,
        size: size,
        // How it moves!
        velocity: {
            x: 0,
            y: 0
        },
        // Appearance
        fill: "WHITE"
    };
    return stone;
}

/**
 * Updates and draws the stones
 */
function draw() {
    background("#87ceeb");

    for (const stone of stones) {
        updateStone(stone);
        drawStone(stone);
    }
}

/**
 * Sets a stone's velocity based on the mouse then updates position
 */
function updateStone(stone) {
    applyForces(stone);
    moveStone(stone);
}

/**
 * Applies friction (diminishing velocity over time) and
 * the mouse force (movement based on running away from the mouse)
 */
function applyForces(stone) {
    // Apply friction to the stone by multiplying it by a fraction
    // less than 1, reducing it
    stone.velocity.x *= velx;
    stone.velocity.y *= velx;
    // If it gets close to 0, make it zero
    if (abs(stone.velocity.x) < 0.2) {
        stone.velocity.x = 0;
    }
    if (abs(stone.velocity.y) < 0.2) {
        stone.velocity.y = 0;
    }

    // If the mouse is in range it affects the stone...
    const d = dist(mouseX, mouseY, stone.x, stone.y);
    if (d < stone.size * 1) {
        // Change the stone's velocity based on the mouse position 
        // relative to the stone position
        // (Essentially it accelerates away from the mouse)
        stone.velocity.x += (stone.x - mouseX) * setVel;
        stone.velocity.y += (stone.y - mouseY) * setVel;
    }
}

/**
 * Applies the stone's velocity to its position
 */
function moveStone(stone) {
    stone.x += stone.velocity.x;
    stone.y += stone.velocity.y;
}

/**
 * Displays a stone as a circle
 */
function drawStone(stone) {
    push();
    noStroke();
    fill(stone.fill);
    ellipse(stone.x, stone.y, stone.size);
    pop();
}

/**
 * Setting the background
 */
function draw() {
    background("BLACK");

    for (const stone of stones) {
        updateStone(stone);
        drawStone(stone);

        // Stone goes out of bounds, reset the program
        if (stone.x < 0 || stone.x > width || stone.y < 0 || stone.y > height) {
            resetProgram();
        }
    }
}

/**
 * Resets the program by clearing the stones array and adding new stones
 */
function resetProgram() {
    stones = []; // Clear all stones
   //Resetting randomaizes the velocity
    setVel = random (.005, 5);

    addStone();
    addStone();
    addStone();
}
