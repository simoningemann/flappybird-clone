class Fireball extends GameObject {

    static image = Utility.loadImage("images/fireball.png");
    static spawner;

    constructor () {
        super({draworder: 1});
        this.xpos = canvas.width * 1.2;
        this.ypos = Math.random() * canvas.height;
        this.radius = 100;
        this.color = "red";
        this.xspeed = -3.5;
        this.tag = "fireball";
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
}