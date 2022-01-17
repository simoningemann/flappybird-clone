class Sprite extends Component {
    constructor(image, offset, layer) {
        let type = "sprite";
        super(type);
        this.image = image;
        this.offset = offset == undefined ? new Vector2() : offset;
        this.layer = layer == undefined ? 0 : layer;
    }
}