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

    // Apply friction 
    stone.velocity.x *= 0.95;
    stone.velocity.y *= 0.95;

    //stone's position
    stone.x += stone.velocity.x;
    stone.y += stone.velocity.y;
}


function updateStoneTowardsCursor(stone) {
    
    const distance = dist(mouseX, mouseY, stone.x, stone.y);
    
   //didtance that triggeres attraction
    const threshold = random (10, 250); 
    if (distance < threshold) {
        stone.velocity.x += (mouseX - stone.x) * 0.01; 
        stone.velocity.y += (mouseY - stone.y) * 0.01;
    }

    //stones top speed
    stone.velocity.x *= 0.95;
    stone.velocity.y *= 0.95;

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