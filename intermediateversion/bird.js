class Bird extends GameObject {

    // standard parameters for making a bird
    static data = {
        drawOrder: 5,
        xPosition: 250 * Canvas.getScale(),
        yPosition: 250 * Canvas.getScale(),
        ySpeed: 0,
        yAccelleration: 0.2 * Canvas.getScale(),
        hitboxRadius: 40 * Canvas.getScale(),
        image: Utility.loadImage("../assets/images/bird.png"),
        flapSound: new Audio("../assets/sounds/flap.wav"),
        flapForce: -5 * Canvas.getScale(),
        flapKey: " ", //space
        canFlap: false
    }

    // constructor for a bird object
    constructor (drawOrder, xPosition, yPosition,
        ySpeed, yAccelleration,hitboxRadius,image,
        flapSound, flapForce, flapKey, canFlap) {
        super(drawOrder);
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.ySpeed = ySpeed;
        this.yAccelleration = yAccelleration;
        this.hitboxRadius = hitboxRadius;
        this.image = image;
        this.flapSound = flapSound;
        this.flapForce = flapForce;
        this.flapKey = flapKey;
        this.canFlap = canFlap;
    }

    draw() {
        Canvas.drawImage(this.image,
            this.xPosition - this.hitboxRadius * 1.5,
            this.yPosition - this.hitboxRadius * 1.5,
            this.hitboxRadius * 3,
            this.hitboxRadius * 3
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

    update () {

        if (gameState == "action" || gameState == "gameover") {
            this.ySpeed += this.yAccelleration * timeScale;
            this.yPosition += this.ySpeed * timeScale;
        }

        if((Canvas.getHeight() < this.yPosition ||
        this.yPosition < 0) && gameState == "action") {
            this.canFlap = false;
            gameOverSound.play();
            gameState = "gameover";
            gameOverText.isActive = true;
        }
        
    }

    flapwings () {
            this.ySpeed = this.flapForce;
    }
}
