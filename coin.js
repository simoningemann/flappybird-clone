class Coin extends GameObject {

    static image = Utility.loadImage("images/coin.png");
    static sound = new Audio("sounds/coin.wav");
    static spawner;

    constructor (params) {
        super({draworder: params.draworder});
        this.xpos = params.xpos;
        this.ypos = params.ypos; 
        this.radius = params.radius;
        this.color = params.color;
        this.xspeed = params.xspeed;
    }

    draw() {
        Canvas.drawImage(Coin.image,
            this.xpos - this.radius * 1.3,
            this.ypos - this.radius * 1.3,
            Coin.image.width*.1,
            Coin.image.height*.1
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
            Coin.sound.play();
            Scoreboard.addPoints(1);
            this.destroy();
        }
    }

    static startSpawner () {
        let params = {
            draworder: 1,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 25,
            color: "red",
            xspeed: -3
        };

        new Coin(params);
        Coin.spawner = setInterval(function() {
            params.ypos =  Math.random() * Canvas.getHeight();
            new Coin(params);
        }, 1000);
    }

}