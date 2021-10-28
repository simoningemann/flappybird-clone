// setting up canvas
let canvas = document.body.appendChild(
    document.createElement("canvas")
);
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;


//setting up variables
let debugModeIsOn = false;
alert("Press SPACE to flap your wings");
Cloud.startSpawner();
Fireball.startSpawner();
Coin.startSpawner();

// setting up game loop
let gameloop = setInterval(function() {
    Utility.drawBackground("#b3d9ff");
    GameObject.drawAll();
    GameObject.updateAll();
}, 10);