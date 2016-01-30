/** @jsx ssml */

import { ssml } from '../src/ssml';
import { renderToString } from '../src/renderToString';

describe('<audio /> tag', function() {

    describe('src property', function() {

        it('should not accept invalid urls', function() {
            expect(() => <audio src="foo-bar" />).to.throw();
        });

        it('should not accept non-HTTPS urls', function() {
            expect(() =>  <audio src="http://example.com" /> ).to.throw();
        });

        it('should accept HTTPS urls', function() {
            expect(() => <audio src="https://example.com" /> ).to.not.throw();
        });
    });
});

describe('<pause /> tag', function() {

    describe('time property', function() {

        it('should render time as milliseconds', function() {
            const string = renderToString(<speak><pause time={1000} /></speak>);
            expect(string).to.contain("1000ms");
        });
    });
});

describe('<sayAs /> tag', function() {

    it('should render as <say-as />', function() {
        const string = renderToString(<speak><sayAs /></speak>);
        expect(string).to.contain('<say-as/>');
    });
});
