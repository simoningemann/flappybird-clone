
class Game {

    static #instance = new Game();
    static debugModeIsOn = false;
    static gameOverSound = new Audio("sounds/gameover.mp3");

    constructor() {
        
        this.music = new Audio("sounds/music.mp3");
        this.music.loop = true;

        let game = this;
        document.addEventListener("keydown", function() {
            game.music.play();
            console.log("play");
            //document.removeEventListener("keydown", this);
        }, {once: true});

        this.gameloop = setInterval(function() {
            Canvas.drawBackground("#b3d9ff");
            GameObject.drawAll();
            GameObject.updateAll();
        }, 10);

    }

}

alert("Press SPACE to flap your wings");
Cloud.startSpawner();
Fireball.startSpawner();
Coin.startSpawner();