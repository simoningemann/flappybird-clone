class Canvas {
    
    static #instance = new Canvas();
    
    constructor () {
        this.canvas = document.body.appendChild(
            document.createElement("canvas"));
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.9;
        this.canvas.color = "#b3d9ff"
    }

    static getHeight() {
        return Canvas.#instance.canvas.height;
    }

    static getWidth() {
        return Canvas.#instance.canvas.width;
    }

    static drawBackground () {
        let canvas = Canvas.#instance.canvas;
        Canvas.drawRect(
            0, 0,
            canvas.width, 
            canvas.height,
            canvas.color
        );
    }

    static drawRect (xpos, ypos, width, height, color) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(xpos, ypos, width, height);
    };

    static drawCircle (xpos, ypos, radius, color) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.fillStyle = color; 
        ctx.beginPath();
        ctx.arc(
            xpos,
            ypos,
            radius,
            0, 2 * Math.PI
        );
        ctx.fill();
    }

    static drawImage (img, xpos, ypos, width, height) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.drawImage(img, xpos, ypos, width, height);
    }

    static drawText (text, xpos, ypos, size, color) {
        let ctx = Canvas.#instance.canvas.getContext("2d");
        ctx.font = "" + size + "px Comic Sans MS";
        ctx.fillStyle = color;
        ctx.fillText(text, xpos, ypos); 
    }
    
}