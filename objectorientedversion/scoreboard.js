class Scoreboard extends GameObject {

    constructor (params) {
        super({draworder: params.draworder});
        this.xpos = params.xpos;
        this.ypos = params.ypos;
        this.color = params.color;
        this.score = params.score;
        this.image = params.image;
    }

    draw() {
        Canvas.drawImage(this.image,
            this.xpos,
            this.ypos,
            40,
            40
        );
        Canvas.drawText({
            text: "x"+ this.score,
            xpos: this.xpos + 40,
            ypos: this.ypos + 30,
            size: 30,
            color: "yellow"
        });
    }

    update () {
       
    }

    addPoints (points) {
        this.score += points;
    }
}