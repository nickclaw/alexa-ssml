/** @jsx ssml */

import { ssml } from '../src/ssml';
import { renderToString } from '../src/renderToString';

describe('<sayAs /> tag', function() {

    it('should render as <say-as />', function() {
        const string = renderToString(<speak><sayAs /></speak>);
        expect(string).to.contain('<say-as/>');
    });
});
