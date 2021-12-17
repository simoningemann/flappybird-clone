class Cloud extends GameObject {

    static data = {
    drawOrder: 0,
    image: Utility.loadImage("../assets/images/cloud.png"),
    xPosition: Canvas.getWidth(),
    xSpeed: -.5 * Canvas.getScale()
    }

    static timeSinceLastSpawn = 0; // milliseconds
    static spawnInterval = 10000; // milliseconds

    constructor (drawOrder, image, xPosition, yPosition, xSpeed) {
        super(drawOrder);
        this.image = image;
        this.xPosition = xPosition;
        this.yPosition = yPosition; 
        this.xSpeed = xSpeed;
    }

    draw() {
        Canvas.drawImage(
            this.image,
            this.xPosition,
            this.yPosition,
            Cloud.data.image.width,
            Cloud.data.image.height
        );
    }

    update() {
        //move cloud to the left
        this.xPosition += this.xSpeed * timeScale;

        //destroy cloud if it moves too far left
        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }
    }

    static getRandomYPosition () {
        return Utility.randomBetween(0, Canvas.getHeight()/2);
    }

}