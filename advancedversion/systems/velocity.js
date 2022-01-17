class Velocity extends Component {
    constructor(speed, accelleration){
        let type = "velocity";
        super
        this.speed = speed == undefined ? new Vector2() : speed;
        this.accelleration = accelleration == undefined ? new Vector2 : accelleration
    }
}