class GameObject {

    static #gameObjects = [];

    constructor (draworder) {
        // higher draworder is drawn on top
        this.draworder = 
        draworder == undefined ? 0 : draworder;

        GameObject.#gameObjects.push(this);
        GameObject.sortAllByDrawOrder();

        /* alternatively use javascripts array.sort method
        GameObject.#gameObjects.sort(
            (a, b) => a.draworder - b.draworder
        );
        */
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

    static sortAllByDrawOrder () {
        let objects = GameObject.#gameObjects;

        // i is the current index
        for(let i = 0; i < objects.length; i++) {
            // first index of the smallest number
            let s = i;

            // j is the temporary index for searching
            for(let j = i; j < objects.length; j++) {
                if(objects[s].draworder > objects[j].draworder) {
                    s = j;
                }
            }
            // temporary index used for swapping
            let t = objects[i];
            objects[i] = objects[s]
            objects[s] = t;
        }
        GameObject.#gameObjects = objects;
    }

    draw () {
    }

    update() {
    }
}