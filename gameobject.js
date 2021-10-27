class GameObject {

    static #gameObjects = [];

    constructor () {
        GameObject.#gameObjects.push(this);
    }

    static drawGameObjects() {
        let objects = GameObject.#gameObjects;
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }

    draw () {
    }
}