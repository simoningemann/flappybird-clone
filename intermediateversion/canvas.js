class Canvas {
    
    static #instance = new Canvas();
    
    constructor () {
        this.canvas = document.body.appendChild(
            document.createElement("canvas"));
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.9;

        // ideal screen dimensions 1920 x 1080
        this.scale = window.innerWidth/1920;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // make the game scale to the size of the browser window
        window.onresize = function () {
            console.log("resize window");
            Canvas.#instance.scale = window.innerWidth/1920;
            Canvas.#instance.canvas.width = window.innerWidth;
            Canvas.#instance.canvas.height = window.innerHeight; 
        }
    }

    static getHeight() {
        return Canvas.#instance.canvas.height;
    }

    static getWidth() {
        return Canvas.#instance.canvas.width;
    }

    static getScale() {
        return Canvas.#instance.scale;
    }

    static fillBackground (color) {
        let canvas = Canvas.#instance.canvas;
        Canvas.drawRect(
            0, 0,
            canvas.width, 
            canvas.height,
            color
        );
    }

    static drawRect (xpos, ypos, width, height, color) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(xpos, ypos, width, height);
    };

    static drawCircle (xpos, ypos, radius, color) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.strokeStyle = color; 
        ctx.beginPath();
        ctx.arc(
            xpos,
            ypos,
            radius,
            0, 2 * Math.PI
        );
        ctx.stroke();
    }

    static drawImage (img, xpos, ypos, width, height) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.drawImage(img, xpos, ypos, width, height);
    }

    static drawText (text, xPosition, yPosition, size, color) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.font = "" + size + "px Comic Sans MS";
        ctx.fillStyle = color;
        ctx.fillText(text, xPosition, yPosition); 
    }
    
}