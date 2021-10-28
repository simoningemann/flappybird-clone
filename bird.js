class Bird extends GameObject {

    static #instance = new Bird();

    constructor () {
        let draworder = 10;
        super(draworder); // calls the GameObject constructor
        this.xpos = 100;
        this.ypos = 100;
        this.radius = 25;
        this.color = "#cc0000";
        this.image = Utility.loadImage("images/bird.png");
        this.yspeed = 0;
        let bird = this;
        document.addEventListener("keydown", function(event) {
            bird.jump(event.key);
        });
    }

    draw() {
        Utility.drawImage(this.image,
            this.xpos - this.radius * 1.5,
            this.ypos - this.radius * 1.5,
            this.radius * 3,
            this.radius * 3
        );

        if(debugModeIsOn) {
            Utility.drawCircle(
                this.xpos, 
                this.ypos, 
                this.radius, 
                this.color
            );
        }
    }

    update () {
        this.yspeed += 0.2;
        this.ypos += this.yspeed;

        if(canvas.height < this.ypos || this.ypos < 0) {
            alert("Game Over");
            window.location.reload(true);
        }
    }

    jump (key) {
        if(key == " ") // if space is pressed
            this.yspeed = -5;
    }
}
