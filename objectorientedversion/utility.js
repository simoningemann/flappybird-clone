class Utility {

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

    static randomBetween(min, max) {
        return Math.random()*(max - min)+min;
    }
}