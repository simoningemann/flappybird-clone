class Coin extends GameObject {

    static data = {
        drawOrder: 8,
        tag: "coin",
        image: Utility.loadImage("../assets/images/coin.png"),
        sound: new Audio("../assets/sounds/coin.wav"),
        xPosition: Canvas.getWidth() +200,
        hitboxRadius: 25,
        xSpeed: -3
    }

    static spawnInterval = 1000;
    static timeSinceLastSpawn = 1000;

    constructor (drawOrder, tag, image, sound,
        xPosition, yPosition, hitboxRadius, xSpeed) {
        super(drawOrder, tag);
        this.image = image;
        this.sound = sound;
        this.xPosition = xPosition;
        this.yPosition = yPosition; 
        this.hitboxRadius = hitboxRadius;
        this.xSpeed = xSpeed;
    }

    draw() {
        Canvas.drawImage(this.image,
            this.xPosition - this.hitboxRadius * 1.3,
            this.yPosition - this.hitboxRadius * 1.3,
            this.image.width*.1,
            this.image.height*.1
        );

        if(debugModeIsOn) {
            Canvas.drawCircle(
                this.xPosition, 
                this.yPosition, 
                this.hitboxRadius, 
                hitboxColor
            );
        }
    }

    update() {
        this.xPosition += this.xSpeed;

        if(this.xPosition < destructionXPosition)
        this.destroy();

        if  (
            Utility.theseCirclesCollide(
            bird.xPosition, bird.yPosition, bird.hitboxRadius,
            this.xPosition, this.yPosition, this.hitboxRadius)
            && gameState == "action") 
        {
            this.sound.play();
            scoreboard.addPoints(1);
            this.destroy();
        }
    }

    static getRandomYPosition () {
        return Utility.randomBetween(0, Canvas.getHeight());
    }

}