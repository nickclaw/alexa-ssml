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



describe('validateProps', function() {

    it('should validate properties based on schema', function() {
        expect(validate({ foo: 1, bar: 5, baz: 'a' })).to.throw();
        expect(validate({ foo: '', bar: '', baz: 'a' })).to.throw();
        expect(validate({ foo: '', bar: 5, baz: 'd' })).to.throw();
    });

    it('should throw when missing required properties', function() {
        expect(validate({ foo: '', bar: 5, baz: 'a', bat: 'whoo' })).to.throw();
    });

    it('should throw on unknown properties', function() {
        expect(validate({ bar: 5, baz: 'a' })).to.throw();
    });

    it.skip('should return a transformed properties object', function() {
        // TODO need validator that supports transforming schema first
    });
});

function validate(props) {
    return () => validateProps(props, testSchema);
}
