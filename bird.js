class Bird extends GameObject {

    static #instance = new Bird(100, 100, 25, "#cc0000");

    constructor (xpos, ypos, radius, color) {
        super();
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.image = Utility.loadImage("images/bird.png");
    }

    draw() {
        if(debugModeIsOn) {
            Utility.drawCircle(
                this.xpos, 
                this.ypos, 
                this.radius, 
                this.color
            );
        }

        Utility.drawImage(this.image,
            this.xpos - this.radius * 1.5,
            this.ypos - this.radius * 1.5,
            this.radius * 3,
            this.radius * 3
        );
    }
}
