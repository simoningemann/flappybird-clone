 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
    music.loop = true;
    music.volume = 0.5;
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

// bird variables
const birdImage = loadImage("../assets/images/bird.png");
const birdImageWidth = 90;
const birdImageHeight = 90;
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let canBirdFlap = false;


// score variables
const scoreboardImage = loadImage("../assets/images/coin.png");
const scoreboardImageXPosition = 70;
const scoreboardImageYPosition = 70;
const scoreboardImageWidth = 60;
const scoreboardImageHeight = 60;
const scoreboardTextXPosition = 100;
const scoreboardTextYPosition = 90;
const scoreboardTextSize = 50;
const scoreboardTextColor = "yellow";
let scoreboardValue = 0;

// cloud variables
const cloudImage = loadImage("../assets/images/cloud.png");
const cloudImageWidth = 200;
const cloudImageHeight = 200;
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
const fireballImage = loadImage("../assets/images/fireball.png");
const fireballXSpeed = -5.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 2000;
const fireballImageWidth = 350;
const fireballImageHeight = 350;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreboardImage;
const coinImageWidth = 62;
const coinImageHeight = 62;
const coinHitboxRadius = 31;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuFirstTextXPosition = 300;
const menuFirstTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuSecondTextXPosition = menuFirstTextXPosition;
const menuSecondTextYPosition = menuFirstTextYPosition + 90; 
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";
const gameOverTextXPosition = menuFirstTextXPosition;
const gameOverTextYPosition = menuFirstTextYPosition;