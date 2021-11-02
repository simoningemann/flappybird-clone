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
        Canvas.drawText("x"+ this.score,
            this.xpos + 40,
            this.ypos + 30,
            30,
            "yellow"
        );
    }

    update () {
       
    }

    addPoints (points) {
        this.score += points;
    }
}