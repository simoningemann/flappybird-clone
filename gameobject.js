class GameObject {

    static #gameObjects = [];

    constructor () {
        GameObject.#gameObjects.push(this);
    }

    static drawAll() {
        let objects = GameObject.#gameObjects;
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }

    static updateAll() {
        let objects = GameObject.#gameObjects;
        for (let i = 0; i < objects.length; i++) {
            objects[i].update();
        }
    }

    draw () {
    }

    update() {
    }
}