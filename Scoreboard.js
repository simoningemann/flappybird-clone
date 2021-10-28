class Scoreboard extends GameObject {

    static instance = new Scoreboard();

    constructor () {
        let draworder = 9;
        super(draworder); // calls the GameObject constructor
        this.xpos = 25;
        this.ypos = 25;
        this.color = "#cc0000";
        this.score = 0;
        this.image = Utility.loadImage("images/coin.png");
    }

    draw() {
        Utility.drawImage(this.image,
            this.xpos,
            this.ypos,
            40,
            40
        );
        Utility.drawText("x"+ this.score,
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
