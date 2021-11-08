class TextObject extends GameObject {

    constructor(drawOrder, text, xPosition, yPosition,
        size, color) {
        super(drawOrder)
        this.text = text;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.size = size;
        this.color = color;
    }

    draw() {
        Canvas.drawText(
            this.text,
            this.xPosition,
            this.yPosition,
            this.size,
            this.color
        );
    }

}