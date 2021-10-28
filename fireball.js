class Fireball extends GameObject {

    static image = Utility.loadImage("images/fireball.png");
    static spawnloop = setInterval(function() {
        new Fireball();
    }, 3000);

    constructor () {
        let draworder = 1;
        super(draworder);
        this.xpos = canvas.width;
        this.ypos = Math.random() * canvas.height;
        this.radius = 100;
        this.color = "red";
        this.xspeed = -3;
    }

    draw() {
        Utility.drawImage(Fireball.image,
            this.xpos - this.radius * 2.3,
            this.ypos - this.radius * 1.6,
            Fireball.image.width*1.3,
            Fireball.image.height*1.3
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

    update() {
        this.xpos += this.xspeed;

        if(this.xpos < -1000)
        this.destroy();

        let bird = Bird.instance;
        if  (
            Utility.theseCirclesCollide(
            bird.xpos, bird.ypos, bird.radius,
            this.xpos, this.ypos, this.radius)
            ) 
        {
            alert("Game Over");
            window.location.reload(true);
        }
    }

}