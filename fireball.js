class Fireball extends GameObject {

    static image = Utility.loadImage("images/fireball.png");
    static spawner;

    constructor () {
        let draworder = 1;
        super(draworder);
        this.xpos = canvas.width;
        this.ypos = Math.random() * canvas.height;
        this.radius = 100;
        this.color = "red";
        this.xspeed = -3.5;
        this.tag = "fireball";
        this.respawnIfOverLapWith("coin");
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
            gameoverSound.play();
            alert("Game Over");
            window.location.reload(true);
        }
    }

    static startSpawner () {
        new Fireball();
        Fireball.spawner = setInterval(function() {
            new Fireball();
        }, 3000);
    }

    respawnIfOverLapWith(tag) {
        for(let obj of GameObject.gameObjects) {
            if(obj.tag == tag) {
                if(Utility.theseCirclesCollide(
                    this.xpos, this.ypos, this.radius,
                    obj.xpos, obj.ypos, obj.radius
                ))
                {
                    new Fireball();
                    this.destroy();
                }
            }
        }
    }
}