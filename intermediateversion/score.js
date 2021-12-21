class Scoreboard extends GameObject {

    // standard paramaters for making a scoreboard
    static data = {
        drawOrder: 9,
        image: Utility.loadImage("../assets/images/coin.png"),
        imageXPosition: 40 * Canvas.getScale(),
        imageYPosition: 40 * Canvas.getScale(),
        imageWidth: 80 * Canvas.getScale(),
        imageHeight: 80 * Canvas.getScale(),
        value: 0,
        textXPosition: 130 * Canvas.getScale(),
        textYPosition: 110 * Canvas.getScale(),
        textSize: 60 * Canvas.getScale(),
        textColor: "yellow"
    }

    constructor (drawOrder, image, imageXPosition, 
        imageYPosition, imageWidth, imageHeight, value,
        textXPosition, textYPosition, textSize, textColor) {
        super(drawOrder);
        this.image = image;
        this.imageXPosition = imageXPosition;
        this.imageYPosition = imageYPosition;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.value = value;
        this.textXPosition = textXPosition;
        this.textYPosition = textYPosition;
        this.textSize = textSize;
        this.textColor = textColor;
        
    }

    draw() {
        Canvas.drawImage(this.image,
            this.imageXPosition,
            this.imageYPosition,
            this.imageWidth,
            this.imageHeight
        );
        Canvas.drawText(
            "x"+ this.value,
            this.textXPosition,
            this.textYPosition,
            this.textSize,
            this.textColor
        );
    }

    update () {
       
    }

    addPoints (points) {
        this.value += points;
    }
}