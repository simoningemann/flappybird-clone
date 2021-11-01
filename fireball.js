class Fireball extends GameObject {

    static image = Utility.loadImage("images/fireball.png");
    static spawner;

    constructor (params) {
        super({draworder: params.draworder});
        this.xpos = params.xpos;
        this.ypos = params.ypos;
        this.radius = params.radius;
        this.color = params.radius;
        this.xspeed = params.xspeed;
    }

    draw() {
        Canvas.drawImage(Fireball.image,
            this.xpos - this.radius * 2.3,
            this.ypos - this.radius * 1.6,
            Fireball.image.width*1.3,
            Fireball.image.height*1.3
        );

        if(Game.debugModeIsOn) {
            Canvas.drawCircle(
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
            Game.gameOverSound.play();
            alert("Game Over");
            window.location.reload(true);
        }
    }

    static startSpawner () {
        let params = {
            draworder: 2,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 100,
            color: "red",
            xspeed: -3.5
        }

        new Fireball(params);
        //this.tag = "fireball";
        Fireball.spawner = setInterval(function() {
            params.ypos = Math.random() * Canvas.getHeight();
            new Fireball(params);
        }, 3000);
    }
}