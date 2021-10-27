// setting up variables
let canvas = document.body.appendChild(document.createElement("canvas"));
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;
let bird = new Bird(100, 100, 25, "#cc0000");

// setting up game loop
let gameloop = setInterval(function() {
    drawBackground("#b3d9ff");
    bird.draw();
}, 10);

// setting up helper funtions
function drawBackground (color) {
    drawRect(0, 0, canvas.width, canvas.height, color);
}

function drawRect (xpos, ypos, width, height, color) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(xpos, ypos, width, height);
};

function drawCircle (xpos, ypos, radius, color) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = color; 
    ctx.beginPath();
    ctx.arc(
        xpos,
        ypos,
        radius,
        0, 2 * Math.PI
    );
    ctx.fill();
}