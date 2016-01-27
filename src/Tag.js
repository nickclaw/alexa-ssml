import { propsToString } from './propsToString';

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

    toString(indent = 0) {
        const { schema, props, children } = this;
        const { tag } = schema;
        const ws = new Array(indent + 1).join("    ");
        let el = ws;

        el += `<${tag}${propsToString(props)}>`;

        if (this.children.length) {
            el += '\n';
            this.children.forEach(child => {
                if (child instanceof Tag) {
                    el += child.toString(indent + 1);
                } else {
                    el += ws + ws + child.trim() + '\n';
                }
            });
            el += ws;
        }

        el += `</${tag}>\n`;

        return el;
    }
}
