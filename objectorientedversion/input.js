class Input {

    static #instance = new Input();
    static #pressedKeys = [];
 
    constructor () {
        
        document.addEventListener("keydown", function(event) {
            Input.#addPressedKey(event.key);
        });

        document.addEventListener("keyup", function(event) {
            Input.#removePressedKey(event.key)
        });
    }


    static keyIsPressed (key) {
        for(let pressedKey of Input.#pressedKeys) {
            if (pressedKey == key) {
                return true;
            }
        }
        return false;
    }

    static #addPressedKey (key) {
        if(!Input.keyIsPressed(key)) {
            Input.#pressedKeys.push(key);
        }
    }

    static #removePressedKey (key) {
        Input.#pressedKeys = 
        Input.#pressedKeys
        .filter( x => x != key);
    }

    static anyKeyIsPressed () {
        return Input.#pressedKeys.length == 0;
    }

    static getAllPressedKeys() {
        return Input.#pressedKeys;
    }
}
