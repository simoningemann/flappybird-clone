class Cloud extends GameObject {

    static image = Utility.loadImage("images/cloud.png");

    constructor (params) {
    super({draworder: params.draworder});
        this.xpos = params.xpos;
        this.ypos = params.ypos; 
        this.xspeed = params.xspeed;
    }

    draw() {
        Canvas.drawImage(
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

}