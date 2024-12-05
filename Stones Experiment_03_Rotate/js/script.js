// Stones that will move around
let stones = [];

/**
 * Creates the canvas and four stones
 */
function setup() {
    createCanvas(500, 500);

    addStone();
    addStone();
    addStone();
}

/**
 * Adds a random stone to the world
 */
function addStone() {
    // Get random arguments
    const x = random(0, width);
    const y = random(0, height);
    const size = (10, 10);
    // Create the stone
    const stone = createStone(x, y, size);
    // Add the stone to the array
    stones.push(stone);
}

/**
 * Creates a JS object representing a stone and using the
 * parameters provided in its properties
 */
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
        fill: "BLACK"
    };
    return stone;
}

/**
 * Updates and draws the stones
 */
function draw() {
    background("GREY");

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
 
function applyForces(stone) {
    // Apply friction to the stone by multiplying it by a fraction
    // less than 1, reducing it
    stone.velocity.x *= random(.02, 2);
    stone.velocity.y *= random(.02, 2);
    // If it gets close to 0, make it zero
    if (abs(stone.velocity.x) < 0.1) {
        stone.velocity.x = 0;
    }
    if (abs(stone.velocity.y) < 0.1) {
        stone.velocity.y = 0;
    }

    // If the mouse is in range it affects the stone...
    const d = dist(mouseX, mouseY, stone.x, stone.y);
    if (d < stone.size) {
        // Change the stone's velocity based on the mouse position 
        // relative to the stone position
        // (Essentially it accelerates away from the mouse)
        stone.velocity.x += (stone.x - mouseX) * 0.005;
        stone.velocity.y += (stone.y - mouseY) * 0.005;
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
function keyPressed(event) {
    // Check if it's enter
    if (event.keyCode === 13) {
        // If so, add a stone
        addStone();
    }
} */

/**
 * Updates and draws the stones
 */
/**
 * Updates and draws the stones
 */
function draw() {
    background("GREY");

    for (const stone of stones) {
        updateStoneTowardsCursor(stone);
        drawStone(stone);

        // Stone goes out of bounds, reset the program
        if (stone.x < 0 || stone.x > width || stone.y < 0 || stone.y > height) {
            resetProgram();
            return; // Reruns Program
        }
    }
}

/**
 * Update stones to move towards the cursor CODE COURTESY OF AJEETPALL SINGH (my roommate)
 */
function updateStoneTowardsCursor(stone) {
    // Add a velocity component to move the stone towards the cursor
    stone.velocity.x += (mouseX - stone.x) * 1.005; // Attraction force
    stone.velocity.y += (mouseY - stone.y) * 1.005;

    // Apply friction (retain the original effect)
    stone.velocity.x *= 0.95;
    stone.velocity.y *= 0.95;

    // Update the stone's position
    stone.x += stone.velocity.x;
    stone.y += stone.velocity.y;
}

/**
 * Update stones to move towards the cursor when within a certain distance
 */
function updateStoneTowardsCursor(stone) {
    // Calculate the distance between the stone and the cursor
    const distance = dist(mouseX, mouseY, stone.x, stone.y);
    
    // Distance for stone to cursor towards it
    const threshold = random (10, 250); // Distance threshold for activation
    if (distance < threshold) {
        stone.velocity.x += (mouseX - stone.x) * 0.01; // Attraction force
        stone.velocity.y += (mouseY - stone.y) * 0.01;
    }

    // Friction
    stone.velocity.x *= 0.75;
    stone.velocity.y *= 0.75;

    // Update the stone's position
    stone.x += stone.velocity.x;
    stone.y += stone.velocity.y;
}


/**
 * Resets the program by clearing the stones array and adding new stones
 */
function resetProgram() {
    stones = []; // Clear all stones
    addStone();
    addStone();
    addStone();
}