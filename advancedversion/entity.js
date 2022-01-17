class Entity {

    static entities = [];

    constructor() {
        this.components = [];
        Entity.entities.push(this);
    }

    addComponent(component) {
        this.components.push(component);
    }

    removeComponent(component) {
        this.components.remove(component);
    }

    destroy() {
        Entity.entities = Entity.entities.remove(this);
    }
}