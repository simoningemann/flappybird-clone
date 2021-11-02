class ActionScene {

    constructor() {
        
        this.music = new Audio("sounds/music.mp3");
        this.music.loop = true;

        let music = this.music;
        document.addEventListener("keydown", function() {
            music.play();
        }, {once: true});
        
        alert("Press SPACE to flap your wings");
        this.bird = new Bird({
            draworder: 8,
            xpos: 250,
            ypos: 100,
            radius: 25,
            color: "#cc0000",
            image: Utility.loadImage("images/bird.png"),
            yspeed: 0
        });

        let params = {
            draworder: 0,
            xpos: Canvas.getWidth(),
            ypos: Math.random() * Canvas.getHeight()/2,
            xspeed: -.5
        };
        new Cloud(params);

        this.cloudSpawner = new Interval({
            procedure: function() {
                params.ypos = Math.random() * Canvas.getHeight()/2;
                new Cloud(params);
            },
            frequency: 10000
        });

        params = {
            draworder: 2,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 100,
            color: "red",
            xspeed: -3.5
        }
        new Fireball(params);
        let fireballspawner = new Interval({
            procedure: function() {
                params.ypos = Math.random() * Canvas.getHeight();
                new Fireball(params);
            }, 
            frequency: 3000
        });

        params = {
            draworder: 1,
            xpos: Canvas.getWidth() * 1.2,
            ypos: Math.random() * Canvas.getHeight(),
            radius: 25,
            color: "red",
            xspeed: -3
        };
        new Coin(params);
        this.coinspawner = new Interval({
            procedure: function() {
            params.ypos =  Math.random() * Canvas.getHeight();
            new Coin(params);
        }, 
        frequency: 1000
        });
    }
}