import { ssml } from '../src/ssml';
import { renderToString } from '../src/renderToString';

describe('renderToString', function() {

    it('should throw if ssml is not surrounded by a <speak /> tag', function() {
        expect(() => renderToString(<pause />)).to.throw();
        expect(() => renderToString()).to.throw();
        expect(() => renderToString([<speak />])).to.throw();
    });

    it('should render props as camel cased', function() {
        const make = props => <speak>{{tag: 'test', props}}</speak>;

        expect(renderToString(make({ foo: 'bar' }))).to.contain('foo="bar"');
        expect(renderToString(make({ FOO: 'bar' }))).to.contain('foo="bar"');
        expect(renderToString(make({ fooBar: 'baz' }))).to.contain('foo-bar="baz"');
        expect(renderToString(make({ 'foo-bar': 'baz' }))).to.contain('foo-bar="baz"');
        expect(renderToString(make({ foo_bar: 'baz'}))).to.contain('foo-bar="baz"');
    });
});
