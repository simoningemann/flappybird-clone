class Transform extends Component {
    constructor(position, rotation, scale) {
        let type = "transform";
        super(type);
        this.position = position == undefined ? new Vector2() : position;
        this.rotation = rotation == undefined ? 0 : rotation;
        this.scale = scale == undefined ? new Vector2() : scale;
    }
}