
class Game {

    static #instance = new Game();
    static debugModeIsOn = false;
    static gameOverSound = new Audio("../assets/sounds/gameover.mp3");

    constructor() {

        this.loop = new Interval({
            procedure: function() {
            Canvas.drawBackground();
            GameObject.drawAll();
            GameObject.updateAll();
            },
            frequency: 1000/120
        });

        this.currentScene = new ActionScene();
    }

    static getScene() {
        return Game.#instance.currentScene;
    }

    static changeScene(newScene) {
        GameObject.destroyAll();
        Interval.clearAll();
        Game.#instance.currentScene = newScene;
    }


}