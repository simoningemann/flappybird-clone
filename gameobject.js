class GameObject {

    static gameObjects = [];

    constructor (draworder) {
        // higher draworder is drawn on top
        this.draworder = 
        draworder == undefined ? 0 : draworder;

        GameObject.gameObjects.push(this);
        GameObject.sortAllByDrawOrder();

        /* alternatively use javascripts array.sort method
        GameObject.#gameObjects.sort(
            (a, b) => a.draworder - b.draworder
        );
        */
    }

    static drawAll() {
        let objects = GameObject.gameObjects;
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }

    static updateAll() {
        let objects = GameObject.gameObjects;
        for (let i = 0; i < objects.length; i++) {
            objects[i].update();
        }
    }

    static sortAllByDrawOrder () {
        let result = GameObject.gameObjects;

        // i is the current index
        for(let i = 0; i < result.length; i++) {
            // first index of the smallest number
            let s = i;

            // j is the temporary index for searching
            for(let j = i; j < result.length; j++) {
                if(result[s].draworder > result[j].draworder) {
                    s = j;
                }
            }
            // temporary index used for swapping
            let t = result[i];
            result[i] = result[s]
            result[s] = t;
        }
        GameObject.gameObjects = result;
    }

    draw () {
    }

    update() {
    }

    destroy() {
        let newobjects = [];
        for(let object of GameObject.gameObjects) {
            if (object != this)
                newobjects.push(object); 
        }
        GameObject.gameObjects = newobjects;
    }
}