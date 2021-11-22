class Fireball extends GameObject {

    static data = {
        drawOrder: 10,
        tag: "fireball",
        image: Utility.loadImage("../assets/images/fireball.png"),
        xPosition: Canvas.getWidth() + 200,
        xSpeed: -3.5,
        hitboxRadius: 100
    }

    constructor (drawOrder, tag, image, 
        xPosition, yPosition, hitboxRadius, xSpeed) {
        super(drawOrder, tag);
        this.image = image;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.hitboxRadius = hitboxRadius;
        this.xSpeed = xSpeed;
    }

    static spawnInterval = 2000;
    static timeSinceLastSpawn = 2000;

    draw() {
        Canvas.drawImage(
            this.image,
            this.xPosition - this.hitboxRadius * 2.3,
            this.yPosition - this.hitboxRadius * 1.6,
            this.image.width*1.3,
            this.image.height*1.3
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

        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }

        if  (
            Utility.theseCirclesCollide(
            bird.xPosition, bird.yPosition, bird.hitboxRadius,
            this.xPosition, this.yPosition, this.hitboxRadius)
            && gameState == "action") 
        {
            bird.canFlap = false;
            gameOverSound.play();
            gameOverText.isActive = true;
            gameState = "gameover";
        }
    }

    static getRandomYPosition() {
        return Utility.randomBetween(0, Canvas.getHeight());
    }

}