class Fireball extends GameObject {

    static image = Utility.loadImage("images/fireball.png");
    static spawner;

    constructor (params) {
        super({draworder: params.draworder}); // 1
        this.xpos =  params.xpos; //canvas.width * 1.2;
        this.ypos =  params.ypos; //Math.random() * canvas.height;
        this.radius = params.radius; //100;
        this.color = params.radius; //"red";
        this.xspeed = params.xspeed; //-3.5;
        //this.tag = "fireball";
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
        new Fireball({
            draworder: 1,
            xpos: canvas.width * 1.2,
            ypos: Math.random() * canvas.height,
            radius: 100,
            color: "red",
            xspeed: -3.5
        });
        //this.tag = "fireball";
        Fireball.spawner = setInterval(function() {
            new Fireball({
                draworder: 1,
                xpos: canvas.width * 1.2,
                ypos: Math.random() * canvas.height,
                radius: 100,
                color: "red",
                xspeed: -3.5
            });
        }, 3000);
    }
}