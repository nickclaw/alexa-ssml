/** @jsx ssml */

import { ssml } from '../src/ssml';
import { renderToString, propsToString } from '../src/renderToString';

describe('renderToString', function() {

    it('should throw if ssml is not surrounded by a <speak /> tag', function() {
        expect(() => renderToString(<pause />)).to.throw();
        expect(() => renderToString()).to.throw();
        expect(() => renderToString([<speak />])).to.throw();
    });

    it('should render with indentation', function() {
        const data = (
            <speak>
                <p>Hello world!</p>
            </speak>
        );
        const expected = `<speak>\n    <p>\n        Hello world!\n    </p>\n</speak>\n`;

        expect(renderToString(data)).to.equal(expected);
    });

    it('should render props as camel cased', function() {
        const props = {
            foo: "bar",
            fooBar: ""
        };
        const expected = ``

        expect(propsToString({ foo: 'bar' })).to.equal('foo="bar"');
        expect(propsToString({ FOO: 'bar' })).to.equal('foo="bar"');
        expect(propsToString({ fooBar: 'baz' })).to.equal('foo-bar="baz"');
        expect(propsToString({ 'foo-bar': 'baz' })).to.equal('foo-bar="baz"');
        expect(propsToString({ foo_bar: 'baz'})).to.equal('foo-bar="baz"');
    });
});
