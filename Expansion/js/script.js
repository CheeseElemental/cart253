// Stones that will remain stationary but change size based on mouse proximity
let stones = [];

/**
 * Creates the canvas and adds three stones
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
    const size = random(20, 120);
    // Create the stone
    const stone = createStone(x, y, size);
    // Add the stone to the array
    stones.push(stone);
}

/**
 * Make Stone
 * parameters provided in its properties
 */
function createStone(x, y, size) {
    const stone = {
        // Position and dimensions
        x: x,
        y: y,
        size: size,
        originalSize: size, // Store the initial size
        // Appearance
        fill: "#999999"
    };
    return stone;
}

/**
 * Updates and draws the stones
 */
function draw() {
    background("#87ceeb");

    for (const stone of stones) {
        updateStoneSize(stone); // Update size based 
        drawStone(stone);

        // If the stone's size exceeds the canvas dimensions, reset the program
        // (yeah so this doesn't seem to work)
        if (stone.size > width || stone.size > height) {
            resetProgram();

    }
}

/**
 * Makes the stones big or small based on mouse proximity
 */
function updateStoneSize(stone) {
    const d = dist(mouseX, mouseY, stone.x, stone.y); // Distance from mouse
    // MAP FUNCTION COURTESY OF "Emedan_mc" ON REDDIT
    //Map the distance to size
    stone.size = map(d, 0, width, stone.originalSize * 2, stone.originalSize / 2);
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
 * Resets the program by clearing the stones array and adding new stones
 */
function resetProgram() {
    stones = []; // Clear all stones
    addStone();
    addStone();
    addStone();

}
}