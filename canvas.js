class Canvas {

    static #instance = new Canvas();

    constructor () {
        this.canvas = document.body.appendChild(document.createElement("canvas"));
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.9;
    }

    static fillColor(color) {
        let canvas = Canvas.#instance.canvas;
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    static drawRect (x, y, width, height, color) {
        let canvas = Canvas.#instance.canvas;
        let ctx = canvas.getContext("2d")
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    static drawCircle (x, y, radius, color) {
        let canvas = Canvas.#instance.canvas;
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(
            x,
            y,
            radius,
            0, 2 * Math.PI
        );
        ctx.fillStyle = color;
        ctx.fill();
    }

    static drawImage(img, x, y, width, height) {
        let canvas = Canvas.#instance.canvas;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, x, y, width, height);
    }

}