import { propsToString } from './propsToString';

export class Tag {

    constructor(tag, props) {
        this.tag = tag;
        this.props = props;
        this.children = [];
    }

    addChild(el) {
        this.children.push(el);
        return this;
    }

    toString(indent = 0) {
        const ws = new Array(indent + 1).join("    ");
        let el = `${ws}<${this.tag}${propsToString(this.props)}>`;

        if (this.children.length) {
            el += '\n';
            this.children.forEach(child => {
                el += child.toString(indent + 1);
            });
            el += ws;
        }

        el += `</${this.tag}>\n`;

        return el;
    }
}
