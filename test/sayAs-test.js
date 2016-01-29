/** @jsx ssml */

import { ssml } from '../src/ssml';
import { elementToString } from '../src/renderToString';

describe('<sayAs /> tag', function() {

    it('should render as <say-as />', function() {
        const string = elementToString(<sayAs />);
        expect(string).to.contain('</say-as>');
    });
});
