 
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
const hitboxColor = "#00FF02";
const destructionXPosition = -1000 * canvasScale;

// bird variables
const birdStartYPosition = 250 * canvasScale;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.2 * canvasScale;
const birdXPosition = 250 * canvasScale;
let birdYPosition = birdStartYPosition;
const birdHitboxRadius = 30 * canvasScale;
const birdImage = loadImage("../assets/images/bird.png");
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
const birdFlapForce = -5 * canvasScale;
const birdFlapKey = " ";
let canBirdFlap = false;


// score variables
const scoreboardImage = loadImage("../assets/images/coin.png");
const scoreboardImageXPosition = 40 * canvasScale;
const scoreboardImageYPosition = 40 * canvasScale;
const scoreboardImageWidth = 60 * canvasScale;
const scoreboardImageHeight = 60 * canvasScale;
const scoreboardTextXPosition = 100 * canvasScale;
const scoreboardTextYPosition = 90 * canvasScale;
const scoreboardTextSize = 50 * canvasScale;
const scoreboardTextColor = "yellow";

let scoreboardValue = 0;

// cloud variables
const cloudImage = loadImage("../assets/images/cloud.png");
cloudImage.width *= .5*canvasScale;
cloudImage.height *= .5*canvasScale;
const cloudSpawnInterval = 10000; // milliseconds
let cloudTimeSinceLastSpawn = 0; // milliseconds
const cloudXSpeed = -.5  * canvasScale;
let clouds = [
    [
        canvas.width, //xPos
        randomBetween(0, canvas.height/2), // yPos 
    ],
    [
        canvas.width - 500  * canvasScale, //xPos
        randomBetween(0, canvas.height/2), // yPos 
    ],
    [
        canvas.width - 1000  * canvasScale, //xPos
        randomBetween(0, canvas.height/2), // yPos 
    ],
];

// fireball variables
const fireballImage = loadImage("../assets/images/fireball.png");
fireballImage.width *=  1.3 * canvasScale;
fireballImage.height *= 1.3 * canvasScale;
const fireballXSpeed = -3.5 * canvasScale;
const fireballHitboxRadius = 100  * canvasScale;
const fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreboardImage;
coinImage.width *= 0.125 * canvasScale
coinImage.height *= 0.125  * canvasScale
const coinHitboxRadius = 31  * canvasScale;
const coinXSpeed = -3  * canvasScale;
const coinSpawnInterval = 1000;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuFirstTextXPosition = 300  * canvasScale;
const menuFirstTextYPosition = 400  * canvasScale; 
const menuSecondText = "Press space to flap wings";
const menuSecondTextXPosition = menuFirstTextXPosition;
const menuSecondTextYPosition = menuFirstTextYPosition + 90  * canvasScale; 
const menuTextSize = 60  * canvasScale;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";
const gameOverTextXPosition = menuFirstTextXPosition;
const gameOverTextYPosition = menuFirstTextYPosition; 
