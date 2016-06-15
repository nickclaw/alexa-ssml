import test from 'ava';
import PropTypes from '../src/prop-types';

test('match', t => {
    const validator = PropTypes.match(/foo/);

    t.falsy(validator({ input: 'foo' }, 'input'));
    t.truthy(validator({ input: 'bar' }, 'input'));
});

test('none', t => {
    const validator = PropTypes.none;

    t.falsy(validator({ children: undefined }, 'children'));
    t.truthy(validator({ children: ['foo'] }, 'children'));
});
