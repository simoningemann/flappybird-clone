// setting up canvas
let canvas = document.body.appendChild(
    document.createElement("canvas")
);
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;


//setting up variables
let debugModeIsOn = false;
let gameoverSound = new Audio("sounds/gameover.mp3");
let music = new Audio("sounds/music.mp3");
music.loop = true;
music.isPlaying = false;

document.addEventListener("keydown", function() {
    music.play();
    console.log("play");
    document.removeEventListener("keydown", this);
});

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