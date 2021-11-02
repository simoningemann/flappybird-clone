
class Game {

    static #instance = new Game();
    static debugModeIsOn = false;
    static gameOverSound = new Audio("sounds/gameover.mp3");

    constructor() {

        this.loop = new Interval({
            procedure: function() {
            Canvas.drawBackground();
            GameObject.drawAll();
            GameObject.updateAll();
            },
            frequency: 10
        });

        this.currentScene = new ActionScene();
    }

    static getScene() {
        return Game.#instance.currentScene;
    }

}