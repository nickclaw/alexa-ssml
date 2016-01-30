import { validateProps } from '../src/validateProps';

const testSchema = {
    "type": "object",
    "required": ['foo'],
    "properties": {
        foo: {
            type: "string"
        },
        bar: {
            type: "integer",
            min: 0,
            max: 10
        },
        baz: {
            enum: ["a", "b", "c"]
        }
    }
}

function validate(props) { // utility function
    return () => validateProps(props, testSchema);
}

describe('validateProps', function() {

    it('should validate properties based on schema', function() {
        expect(validate({ foo: 1, bar: 5, baz: 'a' })).to.throw();
        expect(validate({ foo: '', bar: '', baz: 'a' })).to.throw();
        expect(validate({ foo: '', bar: 5, baz: 'd' })).to.throw();
        expect(validate({ foo: '', bar: 5, baz: 'a' })).to.not.throw();
    });

    it('should throw when missing required properties', function() {
        expect(validate({ foo: '', bar: 5, baz: 'a', bat: 'whoo' })).to.throw();
    });

    it('should throw on unknown properties', function() {
        expect(validate({ bar: 5, baz: 'a' })).to.throw();
    });

    it('should omit the "children" property', function() {
        const props = {
            foo: '',
            bar: 5,
            baz: 'a',
            children: []
        }

        const result = validateProps(props, testSchema);
        expect(result).to.contain.keys('foo', 'bar', 'baz');
    });
});
