/** @jsx ssml */

import { ssml } from '../src/ssml';

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
