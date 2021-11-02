class StartScene {

    constructor () {

        this.bird = new Bird({
            draworder: 8,
            xpos: 250,
            ypos: 100,
            radius: 25,
            color: "#cc0000",
            image: Utility.loadImage("images/bird.png"),
            yspeed: 0,
            isPaused: 0,
        });

    }

}