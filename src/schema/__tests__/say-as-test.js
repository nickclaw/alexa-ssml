import test from 'ava';
import ssml from '../../ssml';

test('children must be present', t => {
    t.throws(() => <say-as interpret-as="characters" />);
});

test('interpret-as property must be present', t => {
    t.throws(() => <say-as>hello</say-as>);
});

test('does not accept invalid interpret-as values', t => {
    t.throws(() => <say-as interpret-as="invalid">hello</say-as>);
});
