class ActionScene {

    constructor() {
        
        this.music = new Audio("../assets/sounds/music.mp3");
        this.music.loop = true;
        
        this.text = new Text({
            draworder: 20,
            text: "Press SPACE to flap your wings",
            xpos: Canvas.getWidth()/2,
            ypos: Canvas.getHeight()/2,
            size: 30,
            color: "yellow"
        });

        this.bird = new Bird({
            draworder: 8,
            xpos: 250,
            ypos: 250,
            radius: 25,
            color: "#cc0000",
            image: Utility.loadImage("../assets/images/bird.png"),
            yspeed: 0,
            yaccelleration: 0,
        });

        let scene = this;
        document.addEventListener("keydown", function() {
            scene.music.play();
            scene.bird.yaccelleration = 0.2
            scene.text.destroy();
        }, {once: true});

        this.scoreboard = new Scoreboard({
            draworder: 9,
            xpos: 25,
            ypos: 25,
            color: "#cc0000",
            score: 0,
            image: Utility.loadImage("../assets/images/coin.png")
        });

        let cloudParams = {
            draworder: 0,
            xpos: Canvas.getWidth(),
            ypos: Math.random() * Canvas.getHeight()/2,
            xspeed: -.5
        };
        new Cloud(cloudParams);

        this.cloudSpawner = new Interval({
            procedure: function() {
                cloudParams.ypos = Math.random() * Canvas.getHeight()/2;
                new Cloud(cloudParams);
            },
            frequency: 10000
        });

        let fireballParams = {
            draworder: 2,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 100,
            color: "red",
            xspeed: -3.5
        }
        new Fireball(fireballParams);
        let fireballspawner = new Interval({
            procedure: function() {
                fireballParams.ypos = Math.random() * Canvas.getHeight();
                new Fireball(fireballParams);
            }, 
            frequency: 3000
        });

        let coinParams = {
            draworder: 1,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 25,
            color: "red",
            xspeed: -3
        };
        new Coin(coinParams);
        this.coinspawner = new Interval({
            procedure: function() {
                coinParams.ypos =  Math.random() * Canvas.getHeight();
                new Coin(coinParams);
            }, 
            frequency: 1000
        });
    }
}