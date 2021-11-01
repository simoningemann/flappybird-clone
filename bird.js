class Bird extends GameObject {

    static instance = new Bird({
        draworder: 8,
        xpos: 250,
        ypos: 100,
        radius: 25,
        color: "#cc0000",
        image: Utility.loadImage("images/bird.png"),
        yspeed: 0
    });

    constructor (params) {
        super({draworder: params.draworder});
        this.xpos = params.xpos;
        this.ypos = params.ypos;
        this.radius = params.radius;
        this.color = params.color;
        this.image = params.image;
        this.yspeed = params.yspeed;
        let bird = this;
        document.addEventListener("keydown", function(event) {
            bird.flapwings(event.key);
        });
    }

    draw() {
        Canvas.drawImage(this.image,
            this.xpos - this.radius * 1.5,
            this.ypos - this.radius * 1.5,
            this.radius * 3,
            this.radius * 3
        );

        if(debugModeIsOn) {
            Canvas.drawCircle(
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

        if(Canvas.getHeight() < this.ypos || this.ypos < 0) {
            gameoverSound.play();
            alert("Game Over");
            window.location.reload(true);
        }
    }

    flapwings (key) {
        if(key == " ") // if space is pressed
            this.yspeed = -5;
    }
}
