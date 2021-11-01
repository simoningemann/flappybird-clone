class Scoreboard extends GameObject {

    static instance = new Scoreboard();

    constructor () {
        super({draworder: 9});
        this.xpos = 25;
        this.ypos = 25;
        this.color = "#cc0000";
        this.score = 0;
        this.image = Utility.loadImage("images/coin.png");
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

    static addPoints (points) {
        Scoreboard.instance.score += points;
    }
}
