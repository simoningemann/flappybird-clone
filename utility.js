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

    static drawText (text, xpos, ypos, size, color) {
        let ctx = canvas.getContext("2d");
        ctx.font = "" + size + "px Comic Sans MS";
        ctx.fillStyle = color;
        ctx.fillText(text, xpos, ypos); 
    }

    static loadImage (path) {
        let img = document.createElement("img");
        img.src = path;
        return img;
    }
    
    static theseCirclesCollide(c1x, c1y, c1r, c2x, c2y, c2r) {
        let distance = this.calculateDistance(
            c1x, c1y, c2x, c2y
        );
        if(distance < c1r + c2r)
            return true;
        else
            return false;
    }

    static calculateDistance (p1x, p1y, p2x, p2y) {
        // calculate the length of each side of the "triangle"
        let a = Math.abs(p1x - p2x);
        let b = Math.abs(p1y - p2y);
        // use the potagorean theorem to calculate the distance
        let cSqaured = (a*a) + (b*b);
        return Math.sqrt(cSqaured);
    }

}