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
const destructionXPosition = -1000;

//make the bird
let bird = new Bird(
    Bird.data.drawOrder,
    Bird.data.xPosition,
    Bird.data.yPositition,    
    Bird.data.ySpeed,
    Bird.data.yAccelleration,
    Bird.data.hitboxRadius,     
    Bird.data.image,
    Bird.data.flapSound,
    Bird.data.flapForce,     
    Bird.data.flapKey,
    Bird.data.canFlap 
);

// create the scoreboard
let scoreboard = new Scoreboard (
    Scoreboard.data.drawOrder,
    Scoreboard.data.image,
    Scoreboard.data.imageXPosition,
    Scoreboard.data.imageYPosition,
    Scoreboard.data.imageWidth,
    Scoreboard.data.imageHeight,
    Scoreboard.data.value,
    Scoreboard.data.textXPosition,
    Scoreboard.data.textYPosition,
    Scoreboard.data.textSize,
    Scoreboard.data.textColor
);


// create 3 clouds
new Cloud (
    Cloud.data.drawOrder,
    Cloud.data.image,
    Cloud.data.xPosition,
    Cloud.getRandomYPosition(),
    Cloud.data.xSpeed
);
new Cloud (
    Cloud.data.drawOrder,
    Cloud.data.image,
    Cloud.data.xPosition-1000,
    Cloud.getRandomYPosition(),
    Cloud.data.xSpeed
);
new Cloud (
    Cloud.data.drawOrder,
    Cloud.data.image,
    Cloud.data.xPosition-500,
    Cloud.getRandomYPosition(),
    Cloud.data.xSpeed
);

/*

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


class ActionScene {

    constructor() {
        
        this.music = new Audio("../assets/sounds/music.mp3");
        this.music.loop = true;
        
        this.text = new Text({
            draworder: 20,
            text: "Press SPACE to flap your wings",
            xpos: Canvas.getWidth()/2,
            ypos: Canvas.getHeight()/2,
            size: 30,
            color: "yellow"
        });

        let scene = this;
        document.addEventListener("keydown", function() {
            scene.music.play();
            scene.bird.yaccelleration = 0.2
            scene.text.destroy();
        }, {once: true});

        this.scoreboard = new Scoreboard({
            draworder: 9,
            xpos: 25,
            ypos: 25,
            color: "#cc0000",
            score: 0,
            image: Utility.loadImage("../assets/images/coin.png")
        });

        let cloudParams = {
            draworder: 0,
            xpos: Canvas.getWidth(),
            ypos: Math.random() * Canvas.getHeight()/2,
            xspeed: -.5
        };
        new Cloud(cloudParams);

        this.cloudSpawner = new Interval({
            procedure: function() {
                cloudParams.ypos = Math.random() * Canvas.getHeight()/2;
                new Cloud(cloudParams);
            },
            frequency: 10000
        });

        let fireballParams = {
            draworder: 2,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 100,
            color: "red",
            xspeed: -3.5
        }
        new Fireball(fireballParams);
        let fireballspawner = new Interval({
            procedure: function() {
                fireballParams.ypos = Math.random() * Canvas.getHeight();
                new Fireball(fireballParams);
            }, 
            frequency: 3000
        });

        let coinParams = {
            draworder: 1,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 25,
            color: "red",
            xspeed: -3
        };
        new Coin(coinParams);
        this.coinspawner = new Interval({
            procedure: function() {
                coinParams.ypos =  Math.random() * Canvas.getHeight();
                new Coin(coinParams);
            }, 
            frequency: 1000
        });
    }
}*/
