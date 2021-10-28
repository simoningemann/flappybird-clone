class Cloud extends GameObject {

    static image = Utility.loadImage("images/cloud.png");
    static spawner;

    constructor () {
        let draworder = 0;
        super(draworder);
        this.xpos = canvas.width;
        this.ypos = Math.random() * canvas.height/2;
        this.xspeed = -.5;
    }

    draw() {
        Utility.drawImage(
            Cloud.image,
            this.xpos,
            this.ypos,
            Cloud.image.width/4,
            Cloud.image.height/4
        );
    }

    update() {
        this.xpos += this.xspeed;
    }

    static startSpawner () {
        new Cloud();
        Cloud.spawner = setInterval(function() {
            new Cloud();
        }, 10000);
    }

}