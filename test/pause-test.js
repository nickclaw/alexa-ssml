/** @jsx ssml */

import { ssml } from '../src/ssml';
import { elementToString } from '../src/renderToString';

describe('<pause /> tag', function() {

    describe('time property', function() {

        it.skip('should render as milliseconds', function() {
            const string = elementToString(<pause time={1000} />);
            expect(string).to.contain("1000ms");
        });
    });
});
