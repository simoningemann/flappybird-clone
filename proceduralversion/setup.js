//game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
    music.loop = true;
    music.volume = 0.5;
let gameState = "menu"; // menu, action or gameover
const timeBetweenUpdates = 10; //milliseconds
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "red";
const destructionXPosition = -1000;

// bird variables
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdXPosition = 250;
let birdYPosition = birdStartYPosition;
const birdHitboxRadius = 25;
const birdImage = loadImage("../assets/images/bird.png");
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
const birdFlapForce = -5;
const birdFlapKey = " ";
let canBirdFlap = false;


// score variables
const scoreboardImage = loadImage("../assets/images/coin.png");
const scoreboardImageXPosition = 25;
const scoreboardImageYPosition = 25;
const scoreboardImageWidth = 40;
const scoreboardImageHeight = 40;
const scoreboardTextXPosition = 65;
const scoreboardTextYPosition = 55;
const scoreboardTextSize = 30;
const scoreboardTextColor = "yellow";

let scoreboardValue = 0;

// cloud variables
const cloudImage = loadImage("../assets/images/cloud.png");
const cloudSpawnInterval = 10000; // milliseconds
let cloudTimeSinceLastSpawn = 0; // milliseconds
const cloudXSpeed = -.5;
let clouds = [
    [
        canvas.width, //xPos
        randomBetween(0, canvas.height/2), // yPos 
    ],
    [
        canvas.width - 500, //xPos
        randomBetween(0, canvas.height/2), // yPos 
    ],
    [
        canvas.width - 1000, //xPos
        randomBetween(0, canvas.height/2), // yPos 
    ],
];

// fireball variables
const fireballImage = loadImage("../assets/images/fireball.png");
const fireballXSpeed = -3.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreboardImage;
const coinHitboxRadius = 25;
const coinXSpeed = -3;
const coinSpawnInterval = 1000;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuFirstTextXPosition = 225;
const menuFirstTextYPosition = 350; 
const menuSecondText = "Press space to flap wings";
const menuSecondTextXPosition = menuFirstTextXPosition;
const menuSecondTextYPosition = menuFirstTextYPosition + 60; 
const menuTextSize = 40;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";
const gameOverTextXPosition = menuFirstTextXPosition;
const gameOverTextYPosition = menuFirstTextYPosition; 
