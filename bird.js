class Bird extends GameObject {

    static #instance = new Bird();

    constructor () {
        super(); // calls the GameObject constructor
        this.xpos = 100;
        this.ypos = 100;
        this.radius = 25;
        this.color = "#cc0000";
        this.image = Utility.loadImage("images/bird.png");
        this.yspeed = 0;
        document.addEventListener("keydown", Bird.jump);
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

    update () {
        this.yspeed += 0.2;
        this.ypos += this.yspeed;
    }

    static jump (event) {
        let bird = Bird.#instance;
        if(event.key == " ") // if space is pressed
            bird.yspeed = -5;
    }
}
