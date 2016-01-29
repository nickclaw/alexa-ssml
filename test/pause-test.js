/** @jsx ssml */

import { ssml } from '../src/ssml';
import { renderToString } from '../src/renderToString';

describe('<pause /> tag', function() {

    describe('time property', function() {

        it.skip('should render as milliseconds', function() {
            const string = elementToString(<speak><pause time={1000} /></speak>);
            expect(string).to.contain("1000ms");
        });
    });
});
