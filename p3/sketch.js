// This only runs once
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight * 1.4);
    canvas.parent('canvas');
    rectMode(CENTER);
}

// This continuously runs
function draw() {

    if (mouseIsPressed) {
        strokeWeight(3);
        stroke(0, 0, 0);
        fill(232, 155, 70, 5);
        rect(mouseX, mouseY, random(windowWidth * 0.1, windowWidth * 0.23), random(windowWidth * 0.1, windowWidth * 0.23));
    }

    if (keyIsPressed) {
        redraw();
    }
}

function windowResized() { resizeCanvas(windowWidth, windowHeight * 1.4); }