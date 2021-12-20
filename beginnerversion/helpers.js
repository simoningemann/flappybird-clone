let canvas = document.body.appendChild(
    document.createElement("canvas")
);

// ideal screen dimensions 1920 x 1080
canvas.width = 1920;
canvas.height = 1080;

// Make 
let timeOfLastFrame = new Date().getTime();
let timeOfCurrentFrame = 0;
let deltaTime = 10;

function loadImage (path) {
    let image = new Image();
    image.src = path;
    return image;
}

    
function theseCirclesCollide(c1x, c1y, c1r, c2x, c2y, c2r) {
    let distance = calculateDistance(
        c1x, c1y, c2x, c2y
    );
    if(distance < c1r + c2r)
        return true;
    else
        return false;
}

function calculateDistance (p1x, p1y, p2x, p2y) {
    // calculate the length of each side of the "triangle"
    let a = Math.abs(p1x - p2x);
    let b = Math.abs(p1y - p2y);
    // use the potagorean theorem to calculate the distance
    let cSqaured = (a*a) + (b*b);
    return Math.sqrt(cSqaured);
}

function fillBackground (color) {
    drawRect(0, 0, canvas.width, canvas.height, color);
}

function drawRect (xpos, ypos, width, height, color) {
    let context = canvas.getContext("2d");
    context.fillStyle = color;
    context.fillRect(xpos, ypos, width, height);
}

function randomBetween(min, max) {
    return Math.random()*(max - min)+min;
}

function drawCircle (xpos, ypos, radius, color) {
    let context = canvas.getContext("2d");
    context.strokeStyle = color; 
    context.beginPath();
    context.arc(
        xpos,
        ypos,
        radius,
        0, 2 * Math.PI
    );
    context.stroke();
}

function drawImage (image, xPos, yPos, width, height) {
    let context = canvas.getContext("2d");
    context.drawImage(image, xPos-width/2, yPos-height/2, width, height);
}

function drawText (text, xPos, yPos, size, color) {
    let context = canvas.getContext("2d");
    context.font = "" + size + "px Comic Sans MS";
    context.fillStyle = color;
    context.fillText(text, xPos, yPos); 
}

function drawBackground (color) {
    drawRect(0, 0,
        canvas.width, 
        canvas.height,
        color
    );
};

Array.prototype.remove = function (elementToRemove) {
    let result = [];
    for(let element of this) {
        if(element != elementToRemove) {
            result.push(element);
        }
    }
    return result;
} 
