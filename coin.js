class Coin extends GameObject {

    static image = Utility.loadImage("images/coin.png");
    static sound = new Audio("sounds/coin.wav");
    static spawner;

    constructor () {
        let draworder = 1;
        super(draworder);
        this.xpos = canvas.width;
        this.ypos = Math.random() * canvas.height;
        this.radius = 25;
        this.color = "red";
        this.xspeed = -3;
        this.tag = "coin";
        this.respawnIfOverLapWith("fireball");
    }

    draw() {
        Utility.drawImage(Coin.image,
            this.xpos - this.radius * 1.3,
            this.ypos - this.radius * 1.3,
            Coin.image.width*.1,
            Coin.image.height*.1
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
            Coin.sound.play();
            Scoreboard.addPoints(1);
            this.destroy();
        }
    }

    static startSpawner () {
        new Coin();
        Coin.spawner = setInterval(function() {
            new Coin();
        }, 1000);
    }

    respawnIfOverLapWith(tag) {
        for(let obj of GameObject.gameObjects) {
            if(obj.tag == tag) {
                if(Utility.theseCirclesCollide(
                    this.xpos, this.ypos, this.radius,
                    obj.xpos, obj.ypos, obj.radius
                ))
                {
                    new Coin();
                    this.destroy();
                }
            }
        }
    }

}