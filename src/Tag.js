
export class Tag {

    constructor(schema, props) {
        this.schema = schema;
        this.props = props;
        this.children = [];
    }

    addChild(el) {
        this.children.push(el);
        return this;
    }
}
