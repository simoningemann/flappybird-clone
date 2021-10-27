class Bird {

    constructor (xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        drawCircle(this.xpos, this.ypos, this.radius, this.color);
    }
}
