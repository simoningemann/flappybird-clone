class Coin extends GameObject {

    static image = Utility.loadImage("images/coin.png");
    static spawner;

    constructor () {
        let draworder = 1;
        super(draworder);
        this.xpos = canvas.width;
        this.ypos = Math.random() * canvas.height;
        this.radius = 25;
        this.color = "red";
        this.xspeed = -3;
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

}