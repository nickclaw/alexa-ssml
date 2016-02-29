import ssml from '../src/ssml';
import renderToString from '../src/renderToString';

describe('ssml', function() {

    describe('custom elements', function() {
        it('should accept custom elements', function() {
            function Date(props) {
                return <sayAs interpretAs="date" {...props} />;
            }

            const data = <speak><Date format="ymd" /></speak>;
            const string = renderToString(data);
            expect(string).to.contain('<say-as interpret-as="date" format="ymd"/>');
        });

        it('should throw if invalid elements are returned', function() {
            function Invalid(props) {
                return <foo {...props} />
            }

            expect(() => <Invalid />).to.throw();
        });
    });

    it('should only accept strings and functions as tags', function() {
        const Valid = () => <p />;
        const A = null;
        const B = [];
        const C = {};
        const D = 1;

        expect(() => <p />).to.not.throw();
        expect(() => <Valid />).to.not.throw();
        expect(() => <A />).to.throw();
        expect(() => <B />).to.throw();
        expect(() => <C />).to.throw();
        expect(() => <D />).to.throw();
    });

    it('should only accept defined tags', function() {
        expect(() => <foo />).to.throw();
        expect(() => <bar />).to.throw();
        expect(() => <p />).to.not.throw();
        expect(() => <s />).to.not.throw();
    });

    it('should return an object', function() {
        const data = (
            <p>
                <pause />
            </p>
        );
        const expected = {
            tag: 'p',
            props: {},
            children: [
                { tag: 'break', props: {}, children: [] }
            ]
        }

        expect(data).to.deep.equal(expected);
    });

    it('should flatten the children', function() {
        const data = (
            <p>
                {[<p />, <s />]}
            </p>
        );

        expect(data.children.length).to.equal(2);
    });
});
