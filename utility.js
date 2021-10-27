class Utility {
    
static drawBackground (color) {
    Utility.drawRect(0, 0, canvas.width, canvas.height, color);
}

static drawRect (xpos, ypos, width, height, color) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(xpos, ypos, width, height);
};

static drawCircle (xpos, ypos, radius, color) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = color; 
    ctx.beginPath();
    ctx.arc(
        xpos,
        ypos,
        radius,
        0, 2 * Math.PI
    );
    ctx.fill();
}

static drawImage (img, xpos, ypos, width, height) {
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, xpos, ypos, width, height);
}

static loadImage (path) {
    let img = document.createElement("img");
    img.src = path;
    return img;
}
}