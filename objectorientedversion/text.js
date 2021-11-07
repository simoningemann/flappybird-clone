class Text extends GameObject {

    constructor(params) {
        super({draworder: params.draworder})
        this.text = params.text;
        this.xpos = params.xpos;
        this.ypos = params.ypos;
        this.size = params.size;
        this.color = params.color;
    }

    draw() {
        Canvas.drawText(this);
    }

}