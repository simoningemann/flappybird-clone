class Utility {

    static loadImage (path) {
        let image = new Image();
        image.src = path;
        return image;
    }
    
    static theseCirclesCollide(
        circleOneX, circleOneY, circleOneRadius,
        circleTwoX, circleTwoY, circleTwoRadius) {
    
        let distance = calculateDistance(
            circleOneX, circleOneY, circleTwoX, circleTwoY
        );
        if(distance < circleOneRadius + circleTwoRadius)
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